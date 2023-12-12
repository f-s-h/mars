import './App.css';
import MenuBar from './Components/MenuBar/MenuBar';
import { Layout } from 'antd'
import { Router } from './router';
import AppContext from './AppContext';
import { OidcProvider, OidcSecure } from '@axa-fr/react-oidc';
import { ThemeProvider } from '@emotion/react';
import { theme } from './Configuration/theme';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { OIDC_CONFIGURATION } from './Configuration/oidc';
import { AppBar, Box, CssBaseline, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from '@mui/material';
import { InboxOutlined, MailOutline } from '@mui/icons-material'

function App() {

  return (
    <>
      <ThemeProvider theme={theme}>
        <OidcProvider configuration={OIDC_CONFIGURATION}>
          <OidcSecure>
          <Box sx={{ display: 'flex' }}>
            <MenuBar/>
            <Box
              sx={{
                width: "100%",
              }}
            >
              <AppContext>
                <Box
                  sx={{
                    paddingTop: "2vh",
                    paddingBottom: "2vh",
                    paddingLeft: "2vw",
                    paddingRight: "2vw",
                  }}
                >
                <Router />
                </Box>
              </AppContext>
            </Box>
          </Box>
          </OidcSecure>
        </OidcProvider>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
}

export default App;

/*
<>
      <ThemeProvider theme={theme}>
        <OidcProvider configuration={OIDC_CONFIGURATION}>
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
*/