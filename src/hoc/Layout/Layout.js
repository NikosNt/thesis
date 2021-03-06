import React, { useState } from 'react';
import { connect } from 'react-redux';

import classes from './Layout.module.css';
import Toolbar from '../../components/Navigation/Toolbar/Toolbar';
import SideDrawer from '../../components/Navigation/SideDrawer/SideDrawer';

const Layout = (props) => {
    const [sideDrawerIsVisible,setSideDrawerIsVisible] = useState(false)

    const sideDrawerClosedHandler = () => { setSideDrawerIsVisible(false); }

    const sideDrawerToggleHandler = () => { setSideDrawerIsVisible(!sideDrawerIsVisible);}

    return (
            <React.Fragment>
                <Toolbar
                    role={props.hasRole}
                    isAuth={props.isAuthenticated}
                    drawerToggleClicked={sideDrawerToggleHandler} />
                <SideDrawer
                    role={props.hasRole}
                    isAuth={props.isAuthenticated}
                    open={sideDrawerIsVisible}
                    closed={sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {props.children}
                </main>
            </React.Fragment>
    )
    
}

const mapStateToProps = state => {
    return {
        hasRole:state.auth.role,
        isAuthenticated: state.auth.token !== null
    };
};

export default connect( mapStateToProps )( Layout );