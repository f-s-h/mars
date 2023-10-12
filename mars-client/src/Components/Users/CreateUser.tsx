import { Button, Form, FormItemProps, Input } from 'antd'
import { Rule } from 'antd/es/form'
import { useForm } from 'antd/es/form/Form'
import { Box } from '@mui/material'
import React from 'react'
import { useUser } from '../../Context/UserContext'
import { UserFormState } from '../../models'
import { OidcSecure } from '@axa-fr/react-oidc/'

interface FormData {
    name: string,
    label: string,
    rules: Rule[],

}

const formData: FormData[] = [
    {
        name: "title",
        label: "Title",
        rules: [{ required: false }]    
    },
    {
        name: "firstName",
        label: "Firstname",
        rules: [{ required: true }]
    },
    {
        name: "lastName",
        label: "Lastname",
        rules: [{ required: true }]
    },
    {
        name: "email",
        label: "Email",
        rules: [{ required: false }],
    },
    //TODO DateSelector Birthday
]

export const CreateUser = () => {
    const [form] = useForm();
    const {
        loading,
        createUser,
    } = useUser();

    const onFinish = async (values: any) => {
        console.log(values);
        var response = await createUser(values as UserFormState);
        console.log(response);    
    }

    return (
        <OidcSecure>
            <h1>Create User</h1>
            <Box>
                <Form
                    form={form}
                    layout='horizontal'
                    labelCol={{
                        span: 4
                    }}
                    wrapperCol={{
                        span: 14
                    }}
                    style={{
                        maxWidth: 600
                    }}
                    onFinish={onFinish}
                >
                    {
                        formData.map((item) => {
                            return (
                                <Form.Item name={item.name} label={item.label} rules={item.rules}>
                                    <Input />
                                </Form.Item>
                            );
                        })
                    }
                    <Form.Item>
                        <Button type='primary' htmlType='submit'>
                            Submit
                        </Button>
                    </Form.Item>
                </Form>
            </Box>
        </OidcSecure>
    )
}
