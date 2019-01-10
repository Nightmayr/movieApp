import React, { Component } from 'react';
import axios from 'axios';

class SearchDB extends Component{
    constructor(){
        super();
        this.state = {
            movies: "hi"
        }
        this.update = this.update.bind(this)
    }

    
    update(){
        axios({
            method: 'get',
            url:'http://www.omdbapi.com/?i=tt3896198&apikey=cba3c9de',
            responseType:'json'
        }).then(response => this.setState({movies:response.data}));
        console.log(this.state.movies);  
    }
    
    render(){
        return(
            <button onClick={this.update}>Click Me</button>
            // console.log(this.update())
        );
    }
}

export default SearchDB;