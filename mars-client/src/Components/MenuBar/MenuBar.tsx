import { MailOutlined, AppstoreOutlined, SettingOutlined } from "@ant-design/icons";
import { Menu, MenuProps } from "antd"
import { Link } from "react-router-dom";
import { useOidc } from "@axa-fr/react-oidc";
import { Profile } from "./Profile";
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material"
import { InboxOutlined, MailOutline } from "@mui/icons-material";
import { theme } from "../../Configuration/theme";
import { ComponentType } from "react";

interface MenuItem {
  name: string,
  to: string,
}

interface MenuSection {
  sectionName: string,
  items: MenuItem[]
}

const menuSections: MenuSection[] = [
  {
    sectionName: "Home",
    items: [
      {
        name: "Home",
        to: "/",
      },
    ]
  },
  {
    sectionName: "User",
    items: [
      {
        name: "Users Overview",
        to: "/users",
      },
      {
        name: "Create User",
        to: "/create/user",
      },
      {
        name: "Create User New",
        to: "/create/user/new",
      },
    ]
  }
]

/*
const items: MenuProps['items'] = [
  getItem("Home", "home", <Link to="/" />),

  getItem('Users', 'users', null, [
    getItem('All Users', '0', <Link to="/users" />),
    getItem('Create User', '1', <Link to="/users/create" />),
  ], 'group'),


  { type: 'divider' },

  
  getItem('Settings', 'sub4', <SettingOutlined />, [
    getItem('Option 9', '9', <Link to="/notimplemented" />),
    getItem('Option 10', '10', <Link to="/notimplemented" />),
    getItem('Option 11', '11', <Link to="/notimplemented" />),
    getItem('Submenu', 'sub3', null, [getItem('Option 7', '7'), getItem('Option 8', '8')]),
  ]),
  */

const MenuBar: React.FC = () => {
  const DRAWER_WIDTH = "12vw"

  return (
    <Drawer
      sx={{
        width: DRAWER_WIDTH,
        '& .MuiDrawer-paper': {
          width: DRAWER_WIDTH,
          boxSizing: 'border-box',
          backgroundColor: theme.palette.primary.main,
          color: theme.palette.primary.contrastText,
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <List>
        <ListItem key={"Home"} disablePadding>
          <ListItemButton href="/">
            <ListItemText primary={"Home"}/>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: theme.palette.primary.light
          },
          color: theme.palette.primary.light
        }}
      >
        User
      </Divider>
      <List>
        <ListItem key={"Create User"} disablePadding>
          <ListItemButton href="/users/create">
            <ListItemText primary={"Create User"} />
          </ListItemButton>
        </ListItem>
        <ListItem key={"User Overview"} disablePadding>
          <ListItemButton href="/users">
            <ListItemText primary={"User Overview"} />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider
        textAlign="left"
        sx={{
          "&::before, &::after": {
            borderColor: theme.palette.primary.light
          },
          color: theme.palette.primary.light
        }}
      >
        User
      </Divider>
    </Drawer>
  )
}

export default MenuBar;