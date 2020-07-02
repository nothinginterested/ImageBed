import React, {forwardRef, Ref} from 'react';
import LayoutX from '../Components/Layout';
import styled from 'styled-components';

import {Form, Input, Button, Checkbox, Layout} from 'antd';
import {useStore} from '../Store';
import {useHistory} from 'react-router';

const FormRegister = styled.section`
      background: white;
      max-width: 600px;
      margin: 30px auto;
      padding: 20px;
      border-radius: 4px;
      box-shadow: 2px 2px 4px 0 rgba(0, 0, 0, 0.2);



`;
const ContentX = styled.div`
      background: white;
`;

const layout = {
    labelCol: {span: 8},
    wrapperCol: {span: 10},
};
const tailLayout = {
    wrapperCol: {offset: 8, span: 16},
};


const Register = () => {
    const {AuthStore} = useStore();
    let history = useHistory();

    const onFinish = (values: any) => {

        console.log('Success:', values);
        AuthStore.setUsername(values.username);
        AuthStore.setUserpassword(values.password);
        AuthStore.register().then();
        history.push('/login');

    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <LayoutX>
            <ContentX style={{padding: '0 50px'}}>
                <FormRegister>
                    <Form
                        {...layout}
                        name="basic"
                        initialValues={{remember: true}}
                        onFinish={onFinish}
                        onFinishFailed={onFinishFailed}

                    >
                        <Form.Item
                            label="Username"
                            name="username"
                            rules={[{required: true, message: 'Please input your username!'}]}
                        >
                            <Input placeholder='请输入用户名'/>
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"
                            rules={[{required: true, message: 'Please input your password!'}]}
                        >
                            <Input.Password placeholder='请输入密码'/>
                        </Form.Item>

                        <Form.Item {...tailLayout} name="remember" valuePropName="checked">
                            <Checkbox>Remember me</Checkbox>
                        </Form.Item>

                        <Form.Item {...tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </FormRegister>
            </ContentX>
        </LayoutX>
    );
};

export default Register;
