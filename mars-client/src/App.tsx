import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import {Layout} from 'antd'
import { Router } from './router';
import AppContext from './AppContext';
import { OidcProvider } from '@axa-fr/react-oidc';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material';

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

  const theme = createTheme({
    palette: {
      primary: {
        main: "#001529",
        light: "#1c3147",
        dark: "#051321",
        contrastText: "#A6ADB4",
      }
    },
  })

  return (
    <ThemeProvider theme={theme}>
    <OidcProvider configuration={configuration}>
      <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <MenuBar />
      </Sider>
      <Layout>
        <Content style={{
          padding: "0 5vh 0 5vh",
          color: theme.palette.primary.contrastText,
        }}>
          <AppContext>
            <Router/>
          </AppContext>
        </Content>
      </Layout>
    </Layout>
    </OidcProvider>
    </ThemeProvider>
  );
}

export default App;
