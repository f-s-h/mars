import React, { FC, ReactNode } from 'react'
import UserContext from './Context/UserContext';

const AppContext: FC<{ children: ReactNode}> = (props) => {
  return (
    <UserContext>
        {props.children}
    </UserContext>
  )
}

export default AppContext;
