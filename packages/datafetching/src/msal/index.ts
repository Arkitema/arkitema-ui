import { Configuration, RedirectRequest } from '@azure/msal-browser'

export const msalConfig = ({ aadTenantId, aadClientId }: { aadTenantId: string; aadClientId: string }) =>
  ({
    auth: {
      clientId: aadClientId,
      authority: `https://login.microsoftonline.com/${aadTenantId}`,
      redirectUri: '/',
    },
    cache: {
      cacheLocation: 'sessionStorage', // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    },
  } as Configuration)

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = (aadAppClientId: string) =>
  ({
    scopes: [`api://${aadAppClientId}/user_impersonation`],
  } as RedirectRequest)
