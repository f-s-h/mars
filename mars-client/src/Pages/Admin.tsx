import { OidcSecure, useOidcAccessToken, useOidcIdToken } from '@axa-fr/react-oidc'

const Admin = () => {
  const {accessToken} = useOidcAccessToken();
  const {idToken} = useOidcIdToken();
  
  return (
    <OidcSecure>
      <h1>Admin</h1>
      <p>Access Token</p>
      {accessToken}
      <p>Id  Token</p>
      {idToken}
    </OidcSecure>
  )
}

export default Admin