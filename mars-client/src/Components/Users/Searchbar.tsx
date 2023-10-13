import { Input } from 'antd'
import { User } from '../../models'

interface SearchbarProps {
    users: User[],
    setFilteredUsers: (users: User[]) => void,
}

export const Searchbar = (props: SearchbarProps) => {
    const applyFilter = (nameFilter: string) => {
        var filteredUsers = props.users.filter(user => (user.firstName + " " + user.lastName).includes(nameFilter));
        props.setFilteredUsers(filteredUsers);
    }

  return (
    <>
        <Input placeholder="User" onChange={(e) => applyFilter(e.target.value)}></Input>
    </>
  )
}