import React from 'react';
import styled from 'styled-components';
import {Layout, Menu, Button} from 'antd';
import {Link, useHistory} from 'react-router-dom';

const {Header} = Layout;

const header=styled(Header)`
      background: white;
`

const LayoutX = (props: any) => {
    let history = useHistory();
    const handleLogin = () => {
        console.log('login');
        history.push('/login');

    };
    const handleRegister = () => {
        console.log('register');
        history.push('/register');
    };
    return (
        <Layout className='layout'>
            <header >
                <div className="logo"/>
                <Menu  mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">
                        <Link to="/"> 主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">

                        <Link to="/about">About</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Button onClick={handleLogin}>登录</Button>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Button onClick={handleRegister}>注册</Button>
                    </Menu.Item>

                </Menu>
            </header>
            {props.children}

        </Layout>
    );
};
export default LayoutX;
