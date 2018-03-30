import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';

//Component Imports
import TestComponent from "./TestComponent";
import GridComponent from "./GridComponent";
import ButtonAppBar from "./ButtonAppBar";
import CollapsibleCard from "./CollapsibleCard";
import TextField from 'material-ui/TextField';
import withStyles from 'material-ui/styles';
import SearchBar from './SearchBar'
import $ from 'jquery'



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      "val": ""
    }
    this.handleChange = this.handleChange.bind(this)
  }
  componentDidMount() {
    $(window).bind('scroll', function () {
      if ($(window).scrollTop() > 86) {
        $('#textfield').show()
      } else {
        $('#textfield').hide()
      }
    });
  }
  handleChange(e) {
    e.preventDefault();
    this.setState({
      "val": e.target.value
    })
  }

  render() {
    return (
      <div>
        <ButtonAppBar title="My AppBar" value={this.state.val} handleChange={this.handleChange}  />
        <br />
        <br />
        <br />
        {/* <SearchBar /> */}
        <br />
        <br />
        <GridComponent value={this.state.val} handleChange={this.handleChange} />
      </div>
    );
  }
}


export default App;