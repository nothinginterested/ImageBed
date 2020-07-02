import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Button, Layout, Menu} from 'antd';
import Login from './Views/Login';
import LayoutX from './Components/Layout';
import Register from './Views/Register';
import Users from './Views/User';

const { Header, Content, Footer } = Layout;
export default function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route path="/about">
                        <About/>
                    </Route>
                    <Route path="/users">
                        <Users/>
                    </Route>
                    <Route path='/login'>
                        <Login/>
                    </Route>
                    <Route path='/register'>
                        <Register/>
                    </Route>

                    <Route path="/">
                    <Login/>
                    </Route>

                </Switch>
            </div>
        </Router>
    );

}

function Home() {

    return (
        <div>
            <h2>Home</h2>
            <Button type='primary'> fuck</Button>
        </div>

    );
}

function About() {
    return <h2>About</h2>;
}


