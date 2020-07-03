import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import {Button, Layout, Menu} from 'antd';
import Login from './Views/Login';
import Register from './Views/Register';
import Users from './Views/User';
import Upload from './Views/Upload';
import LayoutX from './Components/Layout';

export default function App() {
    return (

        <Router>
            <div>
                <LayoutX/>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>

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
                    <Upload/>
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


