import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from '../Login/containers/Login';

function UnAunthenticatedApp() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
            <Redirect to="/" />
        </Switch>
    )
}

export default UnAunthenticatedApp;