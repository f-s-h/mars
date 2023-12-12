import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { useUser } from "../../Context/UserContext";
import { User } from "../../models";
import { Spin } from "antd";

const EditUser = () => {
    const {userId} = useParams();
    const {
        loading, 
        getUserDetailById,
    } = useUser();

    const [user, setUser] = useState({} as User);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        if (userId != null) {
            var user = await getUserDetailById(userId).then();
            setUser(user);
        }
    }

    return(
        <>
            {
                loading ?
                <Spin />
                : 
                <>{user.lastName}</>
            }
        </>
    )
}

export default EditUser