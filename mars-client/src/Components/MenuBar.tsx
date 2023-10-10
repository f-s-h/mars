import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd"
import { Box } from "@mui/material"
import { Link } from "react-router-dom";

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

  /*getItem('Users', 'users',  <Link to="/users"/>, [
    getItem('Overview', 'usersOverview'),
    getItem('Create User', 'createUser'),
  ]),*/


  getItem('Users', 'users', null, [
    getItem('Overview', '0', <Link to="/users" />),
    getItem('Create User', '1', <Link to="/users/create" />),
  ], 'group'),


  { type: 'divider' },

  getItem('Settings', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9', <Link to="/notimplemented" />),
    getItem('Option 10', '10', <Link to="/notimplemented" />),
    getItem('Option 11', '11', <Link to="/notimplemented" />),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),

];

interface Item {
  name: string,
  link: string,
}

const menuItems: Item[] = [
  {
    name: "Users",
    link: "/users",
  }
];

const MenuBar: React.FC = () => {

  const onClick: MenuProps['onClick'] = (e) => {
    //console.log('click ', e);
  };


  return (
    <>
      <Menu
        onClick={onClick}
        style={{ width: "21vh" }}
        //defaultSelectedKeys={['home']}
        mode="inline"
        items={items}
        theme="dark"
      />
      {/*<Box
        sx={{
          color: "white",
        }}
      >
        {
          menuItems.map((item) => {
            return (
              <Box>
                <Link to={item.link}
                  style={{
                  }}
                >
                  <Box
                    sx={{
                      padding: "10px 4px 10px 4px",
                      color: "lightgray",
                    }}
                  >
                    {item.name}
                  </Box>
                </Link>
              </Box>
            )
          })
        }
      </Box>*/}
    </>
  )
}

export default MenuBar;
