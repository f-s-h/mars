import React, { FC, ReactNode } from 'react'
import UserContext from './Context/UserContext';
import PhoneNumberContext from './Context/PhoneNumberContext';

const AppContext: FC<{ children: ReactNode}> = (props) => {
  return (
    <UserContext>
      <PhoneNumberContext>
        {props.children}
      </PhoneNumberContext>
    </UserContext>
  )
}

export default AppContext;
