export const OIDC_CONFIGURATION = {
    client_id: 'react-mars-client',
    redirect_uri: window.location.origin + "/authentication/callback",
    silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
    scope: 'openid profile mars-api offline_access',
    authority: 'https://localhost:5001',
    client_secret: "secret",
}
  