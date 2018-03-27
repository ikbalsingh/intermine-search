import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import AppBar from 'material-ui/AppBar';

//Component Imports
import TestComponent from "./TestComponent";
import GridComponent from "./GridComponent";
import ButtonAppBar from "./ButtonAppBar";
import CollapsibleCard from "./CollapsibleCard";
import TextField from 'material-ui/TextField';



class App extends Component {
  render() {
    return (
      <div>
        <ButtonAppBar title="My AppBar" />
        <br />
        <br />
        <TextField style={{
          "marginLeft": "25%",
          "width": "50%"
        }}
          id="full-width"
          InputLabelProps={{
            shrink: true,
          }}
          placeholder="Search"
        />
        <br />
        <br />
        <GridComponent></GridComponent>
      </div>
    );
  }
}

export default App;
