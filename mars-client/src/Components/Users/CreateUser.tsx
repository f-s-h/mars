import { Button, Form, Input, Spin } from 'antd'
import { Rule } from 'antd/es/form'
import { useForm } from 'antd/es/form/Form'
import { Box } from '@mui/material'
import { useUser } from '../../Context/UserContext'
import { UserFormState } from '../../models'
import { OidcSecure, useOidcAccessToken } from '@axa-fr/react-oidc/'
import { usePhoneNumber } from '../../Context/PhoneNumberContext'

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
    /*{
        name: "phoneNumber",
        label: "Phone number",
        rules: [{ required: false }],
    },
    // TODO Multiple phone numbers
    // TODO Address 
    */
]

export const CreateUser = () => {
    const { accessToken } = useOidcAccessToken();
    const [form] = useForm();
    const {
        loading,
        createUser,
    } = useUser();
    const {
        createPhoneNumber,
    } = usePhoneNumber();

    const onFinish = async (values: any) => {
        console.log(values);
        var userResponse = await createUser(accessToken, values as UserFormState);
        console.log(userResponse);
        //var addressResponse = null; //TODO
        //console.log(addressResponse);
        //var phoneNumberResponse = await createPhoneNumber(accessToken, values as PhoneNumberState, userResponse.id);
        //console.log(phoneNumberResponse);
    }

    return (
        <OidcSecure>
            <h1>Create User</h1>
            {loading ?
                <Spin />
                :
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
            }
        </OidcSecure>
    )
}
