import React, { Component } from 'react';
import { withRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from '../Login/containers/Login';

class UnAunthenticatedApp extends Component {
    componentDidMount() {
        this.props.history.push("/login");
    }
    render() {
    return (
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Login} />
            <Redirect to="/" />
        </Switch>
    )
}
}

export default withRouter(UnAunthenticatedApp);