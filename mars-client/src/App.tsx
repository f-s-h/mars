import './App.css';
import MenuBar from './Components/MenuBar';
import {Layout} from 'antd'
import { Router } from './router';
import AppContext from './AppContext';

function App() {

  const { Content, Sider } = Layout;


  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider>
        <MenuBar />
      </Sider>
      <Layout>
        <Content style={{
          padding: "0 5vh 0 5vh"
        }}>
          <AppContext>
            <Router/>
          </AppContext>
        </Content>
      </Layout>
    </Layout>
  );
}

export default App;
