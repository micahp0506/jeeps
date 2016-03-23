'use strict';


import React from 'react';
import SaleStore from '../stores/SaleStore';
import SaleActions from '../actions/SaleActions';
import {Route, Router, browserHistory, Link} from 'react-router';


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
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
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

  // Handling the category value change
  handleCategoryChange() {
    this.setState({category: this.refs.category.value});
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
  handleDescriptionChange() {
    this.setState({year: this.refs.year.value});
  }

  // Handling the description value change
  handleDescriptionChange() {
    this.setState({description: this.refs.description.value});
  }

  // When change occurs handle state
  onChange(state) {
    this.setState(state);
    // if (this.state.loginState) {
    //   this.props.history.push('/');
      // console.log("this.props", this.props);
    // }
    console.log("Added new new post");
  }

  // Handling submit of sale/post info
  handleSubmit(event) {
    event.preventDefault();
    // Email and Password provided by user
    let email = this.state.email;
    let name = this.state.name;
    // let category = this.state.category;
    let make = this.state.make;
    let model = this.state.model;
    let year = this.state.year;
    let description = this.state.description;

    console.log("email", email);
    console.log("name", name);
    console.log("make", make);
    console.log("model", model);
    console.log("year", year);
    console.log("description", description);
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
      SaleActions.createSale(email, name, make, model, description);
      // this.setState({email: '', password: ''});
      // this._reactInternalInstance._context.history.push('/');
    }
  }


  render() {
    return (
        <div className="ui middle aligned center aligned grid">
            <div className="column">
                <h2 className="ui black image header">
                    <div className="content">
                        Add New Post
                    </div>
                </h2>
                <form className="ui large form">
                    <div className="ui stacked segment">
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" name="email" ref="email"value={this.state.email} onChange={this.handleEmailChange}placeholder="E-mail address">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" name="name" ref="name" value={this.state.name} onChange={this.handleNameChange}placeholder="Name">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" name="make" ref="make" value={this.state.make} onChange={this.handleMakeChange}placeholder="Make">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" name="model" ref="model" value={this.state.model} onChange={this.handleModelChange}placeholder="Model">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <input type="text" name="year" ref="year" value={this.state.year} onChange={this.handleYearChange}placeholder="Year">
                                </input>
                            </div>
                        </div>
                        <div className="field">
                            <div className="ui left icon input">
                                <textarea name="description" ref="description" value={this.state.description} onChange={this.handleDescriptionChange}placeholder="description">
                                </textarea>
                            </div>
                        </div>
                        <button className="ui fluid large black submit button" onClick={this.handleSubmit}>Post Add</button>
                    </div>
                    <div className="ui error message"></div>
                </form>
        </div>
    </div>
    )
  }
}


export default Sale;
