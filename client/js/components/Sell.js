  'use strict';


import React from 'react';
import Dropzone from 'react-dropzone';
import {Route, Router, browserHistory, Link} from 'react-router';
import LoginStore from '../stores/LoginStore';
import SellActions from '../actions/SellActions';
import SellStore from '../stores/SellStore';



// Creating Sale to handle actions and store
class Sell extends React.Component {
  constructor(props) {
    super(props);
    this.state = SellStore.getState();
    this.onChange = this.onChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
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
    SellStore.listen(this.onChange);
  }

  // Unlistening to changes at the store
  componentWillUnmount() {
    SellStore.unlisten(this.onChange);
  }

  // Handling the email value change
  handleEmailChange() {
    this.setState({email: this.refs.email.value});
  }

  // Handling the name value change
  handleNameChange() {
    this.setState({name: this.refs.name.value});
  }

  handleLocationChange() {
    this.setState({location: this.refs.location.value})
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
    console.log("image.preview", image.preview);
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
    let location = this.state.location;
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
      SellActions.noEmail();
      this.refs.nameTextField.getDOMNode().focus();
    }

    // If no name provided
    if (!name) {
      LoginActions.noName();
    }

    // Handling the creation of the new sale post
    if (email && name) {
      SellActions.createSell(userId, email, name, location, make, model, year, price, description, category, image);
    }
  }


  render() {
    return (
        <form className="form-horizontal">
            <h1 className="content">Add New Post</h1>
            <div className="form-group-mail">
                <label className="control-label">Email</label>
                <div className="">
                    <input type="email" className="form-control" ref="email"value={this.state.email} onChange={this.handleEmailChange} placeholder="Email"></input>
                </div>
            </div>
            <div className="form-group-name">
                <label className="control-label">Name</label>
                <div className="">
                    <input type="input" className="form-control" ref="name" value={this.state.name} onChange={this.handleNameChange} placeholder="Name"></input>
                </div>
            </div>
            <div className="form-group-name">
                <label className="control-label">Location</label>
                <div className="">
                    <input type="input" className="form-control" ref="location" value={this.state.location} onChange={this.handleLocationChange} placeholder="Location"></input>
                </div>
            </div>
            <div className="form-group-make">
                <label className="control-label">Make</label>
                <div className="">
                    <input type="input" className="form-control" ref="make" value={this.state.make} onChange={this.handleMakeChange} placeholder="Make"></input>
                </div>
            </div>
            <div className="form-group-model">
                <label className="control-label">Model</label>
                <div className="">
                    <input type="input" className="form-control" ref="model" value={this.state.model} onChange={this.handleModelChange} placeholder="Model"></input>
                </div>
            </div>
            <div className="form-group-year">
                <label className="control-label">Year</label>
                <div className="">
                   <input type="input" className="form-control" ref="year" value={this.state.year} onChange={this.handleYearChange} placeholder="Year"></input>
                </div>
            </div>
            <div className="form-group-price">
                <label className="control-label">Price</label>
                <div className="">
                    <input type="input" className="form-control"  ref="price" value={this.state.price} onChange={this.handlePriceChange} placeholder="Price $"></input>
                </div>
            </div>
            <div className="form-group-des">
                <label className="control-label">Description</label>
                <textarea className="form-control" rows="3" ref="description" value={this.state.description} onChange={this.handleDescriptionChange} placeholder="Vehicle description"></textarea>
            </div>
            <div className="form-group">
                <label className="control-label category">Category</label>
                <div className="">
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
                <div className="">
                    <button className="btn btn-default post-btn button-add" onClick={this.handleSubmit}>Post Add</button>
                </div>
            </div>
        </form>
    )
  }
}



export default Sell;
