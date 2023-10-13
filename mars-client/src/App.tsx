import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import { Layout } from 'antd'
import { Router } from './router';
import AppContext from './AppContext';
import { OidcProvider } from '@axa-fr/react-oidc';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Configuration/theme';

const configuration = {
  client_id: 'react-mars-client',
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
  scope: 'openid profile mars-api',
  authority: 'https://localhost:5001',
  service_worker_realtive_url: '/OidcServiceWorker.js',
  service_worker_only: true,
  client_secret: "secret",
}

function App() {

  const { Content, Sider } = Layout;

  return (
    <ThemeProvider theme={theme}>
      <OidcProvider configuration={configuration}>
        <Layout>
          <Sider>
            <MenuBar />
          </Sider>
          <Layout>
            <Content style={{
              padding: "0 5vh 0 5vh",
              height: "100vh",
              background: theme.palette.secondary.main,
              color: theme.palette.secondary.light,
            }}>
              <AppContext>
                <Router />
              </AppContext>
            </Content>
          </Layout>
        </Layout>
      </OidcProvider>
    </ThemeProvider>
  );
}

export default App;
