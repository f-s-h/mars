import { User, UserFormState } from "../models";
import React, { FC, ReactNode, useState,createContext } from "react";
import * as service from "../Serivces/UserService";
import { useOidcAccessToken } from "@axa-fr/react-oidc";

interface UserContextProps {
    loading: boolean;
    users: User[];
    getAllUsers: () => Promise<User[]>;
    getAllUsersDetail: () => Promise<User[]>;
    createUser: (user: UserFormState) => Promise<User>;
    getUserById: (id: string) => Promise<User>
    getUserDetailById: (id: string) => Promise<User>
}

const Context = createContext<UserContextProps>({
    loading: false,
    users: [],
    getAllUsers: () => new Promise<User[]>(() => {}),
    getAllUsersDetail: () => new Promise<User[]>(() => {}),
    createUser: (user: UserFormState) => new Promise<User>(() => {}),
    getUserById: (id: string) => new Promise<User>(() => {}),
    getUserDetailById: (id: string) => new Promise<User>(() => {}),
})

export const UserContext: FC<{ children: ReactNode}> = (props) => {
    const [users, setUsers] = useState<User[]>([]);
    const [loading, setLoading] = useState(false);

    const {accessToken} = useOidcAccessToken();

    const handleError = (error: any) => {
        console.error("Error!");
        console.error(error);
    }

    const getAllUsers = async (): Promise<User[]> => {
        setLoading(true);
        const response = await service.getAllUsers(accessToken).catch(handleError);
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

    const getAllUsersDetail = async (): Promise<User[]> => {
        setLoading(true);
        const response = await service.getAllUsersDetail(accessToken).catch(handleError);
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
        const response = await service.createUser(accessToken, user);
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

    const getUserById = async (id: string): Promise<User> => {
        setLoading(true);
        const response = await service.getUserById(accessToken, id);
        if(response === undefined) {
            setLoading(false);
            return new Promise<User>(() => {});
        }
        else{
            setLoading(false);
            return response as User;
        }
    }

    const getUserDetailById = async (id: string): Promise<User> => {
        setLoading(true);
        const response = await service.getUserDetailById(accessToken, id);
        if(response === undefined) {
            setLoading(false);
            return new Promise<User>(() => {});
        }
        else{
            setLoading(false);
            return response as User;
        }
    }

    return (
        <Context.Provider
            value={{
                loading,
                users,
                getAllUsers,
                getAllUsersDetail,
                getUserById,
                getUserDetailById,
                createUser,
            }}
        >
            {props.children}
        </Context.Provider>
    )
}

export default UserContext
export const useUser = () => React.useContext(Context);