import React, { useEffect, useState } from 'react'
import { useUser } from '../../Context/UserContext'
import { Spin, Table } from 'antd';
import { Box } from '@mui/material';
import { Searchbar } from './Searchbar';
import { User } from '../../models';

export const UsersOverview = () => {
  const { loading, users, getAllUsers } = useUser();
  const [ filteredUsers, setFilteredUsers ] = useState<User[]>([])

  useEffect(() => {
    getAllUsers();
  }, []);

  useEffect(() => {
    setFilteredUsers(users);
  }, [users]);

  const columns = [
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
    }
  ]

  return (
    <>
      <h1>Users Overview</h1>
      <Box
        sx = {{
          paddingBottom: "2vh" 
        }}
      >
        <Searchbar setFilteredUsers={setFilteredUsers} users={users}/>
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
