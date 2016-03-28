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
    }

        render() {
            if (this.state.loginState) {
            return(
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Jeepers</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav options">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/search'}>Search Listings</Link></li>
                                <li><Link to={'/sale'}>Sell Your Rig</Link></li>
                                <li><Link to={'/myposts'} onClick={this.handleMyPosts}>My Posts</Link></li>
                                <li><a href="#" onClick={this.handleLogout}>Log Out</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
            } else {
            return (
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            </button>
                            <a className="navbar-brand" href="#">Jeepers</a>
                        </div>
                        <div id="navbar" className="collapse navbar-collapse">
                            <ul className="nav navbar-nav options">
                                <li><Link to={'/'}>Home</Link></li>
                                <li><Link to={'/search'}>Search Listings</Link></li>
                                <li><Link to={'/login'}>Log In/Register</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
            )
            }
        }
};




export default Navbar;
