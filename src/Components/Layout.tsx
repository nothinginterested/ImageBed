import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import {Layout, Menu, Button} from 'antd';
import {Link, useHistory, useLocation, useParams, withRouter} from 'react-router-dom';
import {ClickParam} from 'antd/lib/menu';
import {useStore} from '../Store';
import {observer} from 'mobx-react';
import {observable} from 'mobx';

const {Header} = Layout;
const {Content} = Layout;
const header = styled(Header)`
      background: white;
`;
const LayoutX = observer((props: any) => {
    let location = useLocation();
    const {UserStore,AuthStore} = useStore();
    useEffect(() => {
        UserStore.setUser();
    }, []);
    let current = UserStore.currentUser;
    const logout=()=>{
        AuthStore.logout()
    }

    return (
        <Layout className='layout'>
            <header>
                <div className="logo"/>
                <Menu mode="horizontal" selectedKeys={[location.pathname]}>
                    <Menu.Item key="/">
                        <Link to="/"> 主页</Link>
                    </Menu.Item>

                    {current
                        ? <Menu.Item key="/login">
                            {current.attributes.username}
                        </Menu.Item> :
                        <Menu.Item key="/login">
                            <Link to="/login">登录</Link>
                        </Menu.Item>

                    }
                    {current ? <Menu.Item onClick={logout} key='/logout'>
                        <span >登出</span>
                    </Menu.Item> : <Menu.Item key="/register">
                        <Link to="/register">注册</Link>
                    </Menu.Item>}


                </Menu>
            </header>
            <Content style={{background: 'white'}}>
                {props.children}

            </Content>
        </Layout>
    );
});
export default LayoutX;
