import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../../../Context/UserContext';
import { User } from '../../../models';
import { Spin } from 'antd';
import { DetailItem } from './DetailItem';
import { Box } from '@mui/material'

interface UserDetailProps {
}

export const UserDetail = (props: UserDetailProps) => {
    const { userId } = useParams();
    const { getUserDetailById } = useUser();

    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState<User>({} as User);

    useEffect(() => {
        getUser();
    }, [])

    const getUser = async () => {
        if (userId != null) {
            setLoading(true);
            var user = await getUserDetailById(userId).then();
            setUser(user);
            setLoading(false);
        }
    }

    return (
        <>
            <h1>Details</h1>
            {loading ?
                <Spin />
                :
                <Box
                    sx={{
                        width: "100%",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        padding: "2vh",
                    }}
                >
                    <DetailItem name={"First name"} value={user.firstName} />
                    <DetailItem name={"Last name"} value={user.lastName} />
                    {user.emails?
                        user.emails.map((email, index) => {
                            return(
                                <DetailItem name={`Email ${index}:`} value={email.email}></DetailItem>
                            )
                        }) : <></>
                    }
                    {user.phoneNumbers ?
                        user.phoneNumbers.map((phoneNumber, index) => {
                            return (
                                <DetailItem name={`Phone number ${index}`} value={phoneNumber.number} />
                            )
                        })
                        : <></>
                    }
                    {user.addresses ?

                        user.addresses.map((address, index) => {
                            return (
                                <>
                                    Address {index}:
                                    <DetailItem name={"Street"} value={address.street} />
                                    <DetailItem name={"House number"} value={address.houseNumber} />
                                    <DetailItem name={"Postal code"} value={address.postalCode} />
                                    <DetailItem name={"City"} value={address.city} />
                                    <DetailItem name={"Country"} value={address.country.name} />
                                </>
                            )
                        }) : <></>
                    }
                </Box>
            }
        </>
    )
}
