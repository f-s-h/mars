import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useUser } from '../../../Context/UserContext';
import { User } from '../../../models';
import { Spin, Button, Table } from 'antd';
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
                        display: "inline-block"
                    }}
                >
                    <Box
                        sx={{
                            position: "relative"
                        }}    
                    >
                    <Button
                            style={{
                                borderRadius: "0px",
                            }}
                        >
                            Basic
                        </Button>
                        <Button
                            style={{
                                borderRadius: "0px",
                            }}
                        >
                            Addresses
                        </Button>
                        <Button
                            style={{
                                borderRadius: "0px",
                            }}
                        >
                            PhoneNumbers
                        </Button>
                    </Box>
                    <Table>
                        
                    </Table>
                </Box>
            }
        </>
    )
}
