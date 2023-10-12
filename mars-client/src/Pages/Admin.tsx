import { OidcSecure, useOidcAccessToken, useOidcIdToken, useOidcUser } from '@axa-fr/react-oidc'
import React from 'react'

const Admin = () => {
  const {oidcUser, oidcUserLoadingState} = useOidcUser();
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