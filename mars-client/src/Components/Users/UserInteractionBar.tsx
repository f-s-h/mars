import { Button, Space, Tooltip } from 'antd'
import { EyeOutlined, EditOutlined} from '@ant-design/icons'
import React from 'react'
import { redirect, useNavigate } from 'react-router-dom'

interface UserInteractionBarProps {
    id: string,
}

export const UserInteractionBar = (props: UserInteractionBarProps) => {
    const navigate = useNavigate();

    const handleView = () => {
        console.log("view");
        navigate(`/user/${props.id}`);
    }

    const handleEdit = () => {
        console.log("edit: not implemented yet");
    }

    return (
        <>
            <Tooltip
                title={"View"}
            >
            <Button
                shape={"circle"}
                icon={<EyeOutlined />}
                onClick={handleView}
            />
            </Tooltip>
            <Tooltip
                title={"Edit"}
            >
            <Button
                shape={"circle"}
                icon={<EditOutlined />}
                onClick={handleEdit}
            />
            </Tooltip>
        </>
    )
}
