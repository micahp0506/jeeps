'use strict';


import React from 'react';
import {Route, Router, browserHistory, Link} from 'react-router';
import LoginStore from '../stores/LoginStore';



class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
    }

    componentDidMount() {
        LoginStore.listen(this.onChange);
    }

    componentWillUnmount(){
        LoginStore.unlisten(this.onChange);
    }

    onChange(state){
        this.setState(state)
    }

        render() {
            if (this.state.loginState) {
            return(
                <div className="ui inverted menu navbar ">
                    <a href="#" className="brand item logo-container">Jeepers</a>
                    <Link to={'/'} className="item" id="home">Home</Link>
                    <Link to={'/login'} className="item" id="login">Log Out</Link>
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
