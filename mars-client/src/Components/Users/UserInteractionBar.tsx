import { Button, Tooltip } from 'antd'
import { EyeOutlined, EditOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

interface UserInteractionBarProps {
    id: string,
}

export const UserInteractionBar = (props: UserInteractionBarProps) => {
    const navigate = useNavigate();

    const handleView = () => {
        navigate(`/user/${props.id}`);
    }

    const handleEdit = () => {
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