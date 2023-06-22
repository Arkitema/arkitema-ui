import { InteractionStatus } from '@azure/msal-browser'
import { useMsal } from '@azure/msal-react'
import PropTypes from 'prop-types'
import { useCallback, useState } from 'react'
import { Container, Paper, Stack, Typography } from '@mui/material'
import { ErrorMessage } from '@arkitema/errorhandling'
import { ArkitemaButton } from '@arkitema/inputs'
import { useNavigate } from 'react-router-dom'

export interface LoginProps {
  link: string
  title: string
}

export const LoginPage: React.FC<LoginProps> = (props) => {
  const { link, title } = props
  LoginPage.propTypes = {
    link: PropTypes.string.isRequired,
  }

  const { instance, inProgress } = useMsal()
  const [error, setError] = useState()
  const navigate = useNavigate()

  const handleLogin = useCallback(() => {
    instance
      .handleRedirectPromise()
      .then((tokenResponse) => {
        if (!tokenResponse) {
          const accounts = instance.getAllAccounts()

          if (accounts.length === 0) {
            // No user signed in
            if (inProgress === InteractionStatus.None) {
              instance.loginRedirect()
              navigate(link)
            }
          }
        } else {
          // Do something with the tokenResponse
        }
      })
      .catch((err) => {
        setError(err)
      })
  }, [instance, inProgress])

  return (
    <Container maxWidth='xs' data-testid='login-page'>
      <Stack justifyContent='center' sx={{ minHeight: '100vh' }}>
        <Paper elevation={5} sx={{ borderRadius: 3, p: 5 }}>
          <Typography variant='h4' gutterBottom component='div' sx={{ marginBottom: 2 }}>
            {title}
          </Typography>
          <ArkitemaButton text='Login' onclick={handleLogin} sx={{ float: 'right', textTransform: 'none' }}></ArkitemaButton>
          <ErrorMessage error={error} />
        </Paper>
      </Stack>
    </Container>
  )
}