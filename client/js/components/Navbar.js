'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions'


// Creating Navbar to handle navigation
class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this)
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount(){
        LoginStore.unlisten(this.onChange);
    }

    onChange(state){
        console.log("state", state);
        this.setState(state)
    }

    handleLogout() {
        LoginActions.logoutUser(() => {
            this._reactInternalInstance.history.push('/');
        });
    }

        render() {
            if (this.state.loginState) {
            return(
                <div className="ui inverted menu navbar ">
                    <a href="#" className="brand item logo-container">Jeepers</a>
                    <Link to={'/'} className="item" id="home">Home</Link>
                    <a href="#" className="item" id="logout"  onClick={this.handleLogout}>Log Out</a>
                </div>
            )
            } else {
            return (
                <div className="ui inverted menu navbar ">
                    <a href="#" className="brand item logo-container">Jeepers</a>
                    <Link to={'/'} className="item" id="home">Home</Link>
                    <Link to={'/login'} className="item" id="login">Log In</Link>
                </div>
            )
            }
        }
};

export default Navbar;
