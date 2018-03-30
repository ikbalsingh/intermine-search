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


class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar title="My AppBar" />
        <br />
        <br />
        <br />
        {/* <SearchBar /> */}
        <br />
        <br />
        <GridComponent></GridComponent>
      </div>
    );
  }
}


export default App;