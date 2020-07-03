import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Layout, Menu, Button} from 'antd';
import {Link, useHistory, useParams, withRouter} from 'react-router-dom';
import {ClickParam} from 'antd/lib/menu';

const {Header} = Layout;
const {Content} = Layout;
const header = styled(Header)`
      background: white;
`;

const LayoutX = (props:any) => {
    console.log('app');
    let history = useHistory();
    console.log(props.location);
    const [key, setKey] = useState<string>('3');
    let a = useParams();
    console.log(a);
    useEffect(() => {
        // console.log(slug);

    }, []);
    console.log(key);
    const handleClick = (e: ClickParam) => {
        setKey(e.key);

    };
    const handleClick2 = () => {
        history.push('/login');
        setKey('2');

    };

    return (
        <Layout className='layout'>
            <header>
                <div className="logo"/>
                <Menu mode="horizontal" onClick={handleClick}>
                    <Menu.Item key="1">
                        <Link to="/"> 主页</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/users">Users</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/login">登录</Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/register">注册</Link>
                    </Menu.Item>

                </Menu>
            </header>
            <Content style={{background: 'white'}}>
                {props.children}

            </Content>
            <button onClick={handleClick2}>
                ccc
            </button>
        </Layout>
    );
};
export default LayoutX;
