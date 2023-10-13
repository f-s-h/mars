import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd"
import { Link } from "react-router-dom";
import { useOidc } from "@axa-fr/react-oidc";
import { Profile } from "./Profile";
import { Box } from "@mui/material" 

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const items: MenuProps['items'] = [
  getItem("Home", "home", <Link to="/" />),

  getItem('Users', 'users', null, [
    getItem('All Users', '0', <Link to="/users" />),
    getItem('Create User', '1', <Link to="/users/create" />),
  ], 'group'),


  { type: 'divider' },

  /*
  getItem('Settings', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9', <Link to="/notimplemented" />),
    getItem('Option 10', '10', <Link to="/notimplemented" />),
    getItem('Option 11', '11', <Link to="/notimplemented" />),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  */

];

const MenuBar: React.FC = () => {

  return (
    <Box
      sx={{
        position: "fixed",
      }}
    >
      <Menu
        style={{ 
          height: "100vh",
          width: "21vh" ,
        }}
        mode="inline"
        items={items}
        theme="dark"
      />
      <Profile/>
    </Box>
  )
}

export default MenuBar;