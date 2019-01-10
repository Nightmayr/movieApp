import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import SearchDB from "./SearchDB";

class App extends Component {
     
  render() {
    return (
      <div>
        <SearchDB/>
      </div>
    );
  }
}

export default App;
