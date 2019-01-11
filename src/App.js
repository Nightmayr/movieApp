import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchDB from "./SearchDB";
import MovieDisplay from "./MovieDisplay";

class App extends Component {
     
  render() {
    return (
      <div className = "App-header">
        <SearchDB/>
      </div>
    );
  }
}

export default App;
