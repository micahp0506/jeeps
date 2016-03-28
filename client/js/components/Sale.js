  'use strict';


import React from 'react';
import Dropzone from 'react-dropzone';
import {Route, Router, browserHistory, Link} from 'react-router';
import LoginStore from '../stores/LoginStore';
import SaleActions from '../actions/SaleActions';
import SaleStore from '../stores/SaleStore';



// Creating Sale to handle actions and store
class Sale extends React.Component {
  constructor(props) {
    super(props);
    this.state = SaleStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.handleMakeChange = this.handleMakeChange.bind(this);
    this.handleModelChange = this.handleModelChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handlePriceChange = this.handlePriceChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleCategoryChange = this.handleCategoryChange.bind(this);
    this.onDrop = this.onDrop.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  // Listening to changes at the store
  componentDidMount() {
    SaleStore.listen(this.onChange);
  }

  // Unlistening to changes at the store
  componentWillUnmount() {
    SaleStore.unlisten(this.onChange);
  }

  // Handling the email value change
  handleEmailChange() {
    this.setState({email: this.refs.email.value});
  }

  // Handling the name value change
  handleNameChange() {
    this.setState({name: this.refs.name.value});
  }

  // Handling the make value change
  handleMakeChange() {
    this.setState({make: this.refs.make.value});
  }

  // Handling the model value change
  handleModelChange() {
    this.setState({model: this.refs.model.value});
  }

  // Handling the year value change
  handleYearChange() {
    this.setState({year: this.refs.year.value});
  }

  // Handling the price change
  handlePriceChange() {
    this.setState({price: this.refs.price.value});
  }

  // Handling the description value change
  handleDescriptionChange() {
    this.setState({description: this.refs.description.value});
  }

  // Handling the category value change
  handleCategoryChange() {
    this.setState({category: this.refs.menu.value})
  }

  // Getting the images that were loaded
  onDrop(images) {
    console.log("images", images);
    let image = images[0];
    console.log("image", image);
    // this.setState({image: image});
    // console.log("this.state.image", this.state.image);
  }

  // When change occurs handle state
  onChange(state) {
    this.setState(state);
    console.log("Added new post");
  }

  // Handling submit of sale/post info
  handleSubmit(event) {
    event.preventDefault();
    let loginState = LoginStore.getState();
    let userId = loginState.userId;
    let email = this.state.email;
    let name = this.state.name;
    let make = this.state.make;
    let model = this.state.model;
    let year = this.state.year;
    let price = this.state.price;
    let description = this.state.description;
    let category = this.refs.menu.value;
    let image = this.state.image;

    // If no email provided
    if (!email) {
      SaleActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
    }

    // If no name provided
    if (!name) {
      LoginActions.noName();
    }

    // Handling the creation of the new sale post
    if (email && name) {
      SaleActions.createSale(userId, email, name, make, model, year, price, description, category, image);
    }
  }


  render() {
    return (
        <form className="form-horizontal">
            <h1 className="content">Add New Post</h1>
            <div className="form-group-mail">
                <label className="col-sm-2 control-label">Email</label>
                <div className="col-sm-10">
                    <input type="email" className="form-control" id="inputPassword3" ref="email"value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"></input>
                </div>
            </div>
            <div className="form-group-name">
                <label className="col-sm-2 control-label">Name</label>
                <div className="col-sm-10">
                    <input type="input" className="form-control" id="inputPassword3" ref="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"></input>
                </div>
            </div>
            <div className="form-group-make">
                <label className="col-sm-2 control-label">Make</label>
                <div className="col-sm-10">
                    <input type="input" className="form-control" id="inputEmail3" ref="make" value={this.state.make} onChange={this.handleMakeChange} placeholder="Make"></input>
                </div>
            </div>
            <div className="form-group-model">
                <label className="col-sm-2 control-label">Model</label>
                <div className="col-sm-10">
                    <input type="input" className="form-control" id="inputPassword3" ref="model" value={this.state.model} onChange={this.handleModelChange} placeholder="Model"></input>
                </div>
            </div>
            <div className="form-group-year">
                <label className="col-sm-2 control-label">Year</label>
                <div className="col-sm-10">
                   <input type="input" className="form-control" id="inputPassword3" ref="year" value={this.state.year} onChange={this.handleYearChange} placeholder="Year"></input>
                </div>
            </div>
            <div className="form-group-price">
                <label className="col-sm-2 control-label">Price</label>
                <div className="col-sm-10">
                    <input type="input" className="form-control" id="inputPassword3" ref="price" value={this.state.price} onChange={this.handlePriceChange} placeholder="Price $"></input>
                </div>
            </div>
            <div className="form-group-des">
                <label className="col-sm-2 control-label">Description</label>
                <textarea className="form-control" rows="3" ref="description" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Vehicle description"></textarea>
            </div>
            <div className="form-group">
                <label className="col-sm-2 control-label category">Category</label>
                <div className="col-sm-3">
                    <select className="form-control inputstl" id="expertise" ref="menu" onChange={this.handleCategoryChange}>
                        <option ref="atv" value="ATV">ATV</option>
                        <option ref="utv" value="UTV">UTV</option>
                        <option ref="dirt" value="Bike">Dirt Bike</option>
                        <option ref="jeep" value="Jeep">Jeep</option>
                        <option ref="jeep" value="Truck">Truck</option>
                        <option ref="other" value="Other">Other</option>
                    </select>
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-offset-2 col-sm-10">
                    <button className="btn btn-default post-btn" onClick={this.handleSubmit}>Post Add</button>
                </div>
            </div>
        </form>
    )
  }
}



export default Sale;
