import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Layout, Menu, Button} from 'antd';
import {Link, useHistory, useLocation, useParams, withRouter} from 'react-router-dom';
import {ClickParam} from 'antd/lib/menu';

const {Header} = Layout;
const {Content} = Layout;
const header = styled(Header)`
      background: white;
`;

const LayoutX = (props:any) => {
    let location=useLocation()
    console.log(location);
    let history = useHistory();
    console.log(props.location);
    const [key, setKey] = useState<string>('3');

    const handleClick = (e: ClickParam) => {
        setKey(e.key);

    };


    return (
        <Layout className='layout'>
            <header>
                <div className="logo"/>
                <Menu mode="horizontal"  selectedKeys={[location.pathname]} >
                    <Menu.Item key="/">
                        <Link to="/"> 主页</Link>
                    </Menu.Item>
                    <Menu.Item key="/users">
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="/login">
                        <Link to="/login">登录</Link>
                    </Menu.Item>
                    <Menu.Item key="/register">
                        <Link to="/register">注册</Link>
                    </Menu.Item>

                </Menu>
            </header>
            <Content style={{background: 'white'}}>
                {props.children}

            </Content>
        </Layout>
    );
};
export default LayoutX;
