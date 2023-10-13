import React, { useEffect, useState } from 'react'
import { useUser } from '../../Context/UserContext'
import { Button, Spin, Table, theme } from 'antd';
import { Box } from '@mui/material';
import { Searchbar } from './Searchbar';
import { User } from '../../models';
import { ColumnsType } from 'antd/lib/table';
import { Link } from 'react-router-dom';
import { EyeOutlined, EditOutlined } from '@ant-design/icons';
import { useTheme } from '@mui/material/styles';
import { UserInteractionBar } from './UserInteractionBar';

export const UsersOverview = () => {
  const { loading, users, getAllUsers } = useUser();
  const theme = useTheme();

  const [filteredUsers, setFilteredUsers] = useState<User[]>([])

  useEffect(() => {
    getAllUsers();
  }, [])

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const columns: ColumnsType<User> = [
    {
      title: 'Firstname',
      dataIndex: 'firstName',
      key: 'firstName',
    },
    {
      title: 'Lastname',
      dataIndex: 'lastName',
      key: 'lastName'
    },
    {
      title: 'Username',
      dataIndex: 'userName',
      key: 'userName',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Options',
      dataIndex: 'id',
      render: (id, record) => {
        return (
          <>
            <UserInteractionBar id={id}/>
          </>
        )
      }
    }
  ]

  return (
    <>
      <h1>Users Overview</h1>
      <Box
        sx={{
          paddingBottom: "2vh"
        }}
      >
        <Searchbar setFilteredUsers={setFilteredUsers} users={users} />
      </Box>
      <Box>
        {
          loading ?
            <Spin />
            :
            <Table dataSource={filteredUsers} columns={columns} />
        }
      </Box>
    </>
  )
}
