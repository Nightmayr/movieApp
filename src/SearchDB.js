import React, { Component } from 'react';
import axios from 'axios';

class SearchDB extends Component{
    constructor(){
        super();
        this.state = {
            movies: "hi",
            searchQuery: ""
        }
        this.update = this.update.bind(this)
    }

    handleInput = (event) =>{
        this.setState({searchQuery: document.getElementById("filmSearch").value})
    }

    handleSubmit = (event) => {
    // console.log('A name was submitted: ' + this.state.stateText);
    event.preventDefault();
    }
    
    update(){
        axios({
            method: 'get',
            url:'http://www.omdbapi.com/?t='+this.state.searchQuery+'&apikey=cba3c9de',
            responseType:'json'
        }).then(response =>{ 
            this.setState({movies:response.data});
        console.log(this.state.movies)
        });  
    }
    
    render(){
        return(
            <form >
                <label>Search Film by Title:</label>
                <br></br>
                <input id="filmSearch" type="text" onChange={(this.handleInput)}></input>
                <input type="button" value="Submit" onClick={this.update}></input>
            </form>
            // <input type="text"></input>
            // <button onClick={this.update}>Click Me</button>
            // console.log(this.update())
        );
    }
}

export default SearchDB;