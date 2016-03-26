'use strict';


import React from 'react';
import alt from '../utils/alt';
import {Route, Router, browserHistory, Link} from 'react-router';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import MyPostsActions from '../actions/MyPostsActions';
import MyPostsStore from '../stores/MyPostsStore';

// Creating Navbar to handle navigation
class Navbar extends React.Component{

    constructor(props) {
        super(props);
        this.state = LoginStore.getState();
        this.onChange = this.onChange.bind(this);
        this.handleLogout = this.handleLogout.bind(this);
        this.handleMyPosts = this.handleMyPosts.bind(this);
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

    handleMyPosts() {
        let login = LoginStore.getState();
        let id = login.userId;
        MyPostsActions.getMyPosts(id);
    }

    handleLogout() {
        console.log("this", this);
        alt.recycle(LoginStore);
        this._reactInternalInstance._context.history.push('/');
        // LoginActions.logoutUser(() => {
        //     console.log("this", this);
        //     this._reactInternalInstance.history.push('/');
        // });
    }

        render() {
            if (this.state.loginState) {
            return(
                <div className="ui inverted menu navbar ">
                    <a href="#" className="brand item logo-container">Jeepers</a>
                    <Link to={'/'} className="item" id="home">Home</Link>
                    <a href="#" className="item" id="logout"  onClick={this.handleLogout}>Log Out</a>
                    <Link to={'/myposts'} className="item" id="myposts" onClick={this.handleMyPosts}>My Posts</Link>
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
