import { User, UserFormState } from "../models";
import React, { FC, ReactNode, useState,createContext } from "react";
import * as service from "../Serivces/UserService";

interface UserContextProps {
    loading: boolean;
    users: User[];
    getAllUsers: () => Promise<User[]>;
    createUser: (user: UserFormState) => Promise<User>;
}

const Context = createContext<UserContextProps>({
    loading: false,
    users: [],
    getAllUsers: () => new Promise<User[]>(() => {}),
    createUser: (user: UserFormState) => new Promise<User>(() => {}),
})

export const UserContext: FC<{ children: ReactNode}> = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const handleError = (error: any) => {
        console.error("Error!");
        console.error(error);
    }

    const getAllUsers = async (): Promise<User[]> => {
        setLoading(true);
        const response = await service.getAllUsers().catch(handleError);
        if (response === undefined) {
            setLoading(false);
            return new Promise<User[]>(() => {});
        }
        else {
            setUsers(response);
            setLoading(false);
            return response as User[];
        }
    }

    const createUser = async (user: UserFormState): Promise<User> => {
        setLoading(true);
        const response = await service.createUser(user);
        if(response === undefined) {
            setLoading(false);
            return new Promise<User>(() => {});
        }
        else {
            setLoading(false);
            // TODO maybe get all users
            return response as User;
        }
    }

    return (
        <Context.Provider
            value={{
                loading,
                users,
                getAllUsers,
                createUser,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default UserContext
export const useUser = () => React.useContext(Context);