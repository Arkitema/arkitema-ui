import { ApolloClient, ApolloProvider, createHttpLink, from, fromPromise, InMemoryCache } from '@apollo/client'
import { useMsal } from '@azure/msal-react'
import React, { ReactNode, useEffect, useMemo, useState } from 'react'
import { setContext } from '@apollo/client/link/context'
import { onError } from '@apollo/client/link/error'
import { SilentRequest } from '@azure/msal-browser'

interface ApolloTokenProviderProps {
  children: ReactNode
  apolloRouterUrl: string
  aadAppClientId: string
}
export const ApolloTokenProvider: React.FC<ApolloTokenProviderProps> = ({
  children,
  apolloRouterUrl,
  aadAppClientId,
}) => {
  const { accounts, instance } = useMsal()
  const [token, setToken] = useState<string | undefined>(undefined)

  const httpLink = createHttpLink({ uri: apolloRouterUrl })
  const authLink = setContext(async (_, { headers }) => {
    const authToken = token || (await acquireToken())
    return {
      headers: {
        ...headers,
        authorization: `Bearer ${authToken}`,
      },
    }
  })

  const silentRequest: SilentRequest = {
    account: accounts[0],
    scopes: [`api://${aadAppClientId}/user_impersonation`],
  }

  const errorLink = onError(({ graphQLErrors, networkError, operation, forward }) => {
    if (graphQLErrors) {
      for (const { message, locations, path } of graphQLErrors) {
        if (message === 'User is not authenticated') {
          return fromPromise(instance.acquireTokenSilent(silentRequest)).flatMap((token) => {
            setToken(token.accessToken)
            operation.setContext({
              headers: {
                ...operation.getContext()['headers'],
                authorization: `Bearer ${token.accessToken}`,
              },
            })
            return forward(operation)
          })
        } else {
          console.log(`[GraphQL error]: Message: ${message}, Location: ${locations?.join(',')}, Path: ${path}`)
        }
      }
    }

    if (networkError) console.log(`[Network error]: ${networkError}, [Operation]: ${operation.operationName}`)
  })

  const client = useMemo(
    () =>
      new ApolloClient({
        link: from([authLink, errorLink, httpLink]),
        headers: {
          Authorization: 'Bearer ' + token,
        },
        cache: new InMemoryCache(),
      }),
    [errorLink, httpLink, authLink, token],
  )

  const acquireToken = async () => {
    if (!accounts || !accounts.length || !instance) {
      return ''
    }
    try {
      const token = await instance.acquireTokenSilent(silentRequest)
      setToken(token.accessToken)
      return token.accessToken
    } catch (error: any) {
      console.error('Caught Error in MSAL', error.message)
      return ''
    }
  }

  useEffect(() => {
    acquireToken()
  }, [accounts, instance])

  return <ApolloProvider client={client}>{children}</ApolloProvider>
}
