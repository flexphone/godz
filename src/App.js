import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
// import Header from "./Header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div />
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />

          <h1 className="App-title">Welcome Thomas Lawson</h1>
        </header>
        <p className="App-intro">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sed
          diam eget risus varius blandit sit amet non magna. Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. Praesent commodo cursus magna,
          vel scelerisque nisl consectetur et. Cras mattis consectetur purus sit
          amet fermentum. Duis mollis, est non commodo luctus, nisi erat
          porttitor ligula, eget lacinia odio sem nec elit. Aenean lacinia
          bibendum nulla sed consectetur. <code>src/App.js</code> and save to
          reload.
        </p>
      </div>
    );
  }
}

export default App;
