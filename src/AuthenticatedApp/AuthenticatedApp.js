import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from "../Login/store/LoginActions";
import DefaultLayout from '../common/layout/DefaultLayout';
import ProductDashboard from '../Products/containers/Products';

export class AuthenticatedApp extends Component {
    render() {        
        return (
            <DefaultLayout logout={this.props.logout}>
                <Switch>
                    <Route path="/products" component={ProductDashboard} />
                </Switch>
            </DefaultLayout>

        )
    }
}

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    null,
    mapDispatchToProps
)(AuthenticatedApp);