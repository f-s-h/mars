import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Error404 from './Components/Error/Error404'
import Users from './Pages/Users'
import Home from './Pages/Home'
import { Error501 } from './Components/Error/Error501'
import { withOidcSecure } from '@axa-fr/react-oidc'
import Admin from './Pages/Admin'
import { UserDetail } from './Components/Users/UserDetail/UserDetail'
import CreateUser from './Components/Users/CreateUser'
import EditUser from './Components/Users/EditUser'
import ModifyUser from './Components/Users/ModifyUser'

export const Router = () => {
  return (
    <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/users" element={<Users/>}/>
            <Route path="/users/create" element={<CreateUser/>}/>
            <Route path="/user/:userId" element={<UserDetail/>}/>
            <Route path="/user/:userId/edit" element={<EditUser/>}/>
            <Route path="/notfound" element={<Error404/>}/>
            <Route path="/notimplemented" element={<Error501/>}/>
            <Route path="/admin" element={<Admin/>}/>
            <Route path="*" element={<Error404/>}/>
            <Route path="/temp" element={<ModifyUser/>}/>
    </Routes>
  )
}