import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import { Layout } from 'antd'
import { Router } from './router';
import AppContext from './AppContext';
import { OidcProvider } from '@axa-fr/react-oidc';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Configuration/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const configuration = {
  client_id: 'react-mars-client',
  redirect_uri: window.location.origin + "/authentication/callback",
  silent_redirect_uri: window.location.origin + "/authentication/silent-callback",
  scope: 'openid profile mars-api offline_access',
  authority: 'https://localhost:5001',
  client_secret: "secret",
}

function App() {

  const { Content, Sider } = Layout;



  return (
    <>
      <ThemeProvider theme={theme}>
        <OidcProvider configuration={configuration}>
          <Layout>
            <Sider
              width={"12vw"}
              style={{
                overflow: "auto",
                height: "100vh",
                left: 0
              }}
            >
              <MenuBar />
            </Sider>

            <Layout>
              <Content style={{
                padding: "0 5vh 0 5vh",
                height: "100vh",
                background: theme.palette.secondary.main,
                color: theme.palette.secondary.light,
                overflow: "auto",
              }}>
                <AppContext>
                  <Router />
                </AppContext>
              </Content>
            </Layout>
          </Layout>
        </OidcProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;