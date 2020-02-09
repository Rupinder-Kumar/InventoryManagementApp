import React from "react";
import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import './DefaultLayout.scss';


const DefaultLayout = props => (
    <section className="main">
        <AppHeader logout={props.logout}/>
            {props.children}
        <AppFooter/>
    </section>
);

export default DefaultLayout;