import React, { Component } from 'react';
import axios from 'axios';
import MovieDisplay from "./MovieDisplay";

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
            url:'http://www.omdbapi.com/?s='+this.state.searchQuery+'&apikey=cba3c9de',
            responseType:'json'
        }).then(response =>{ 
            this.setState({movies:response.data.Search});
        console.log(this.state.movies)
        });  
    }
    
    render(){
        let films=[];
        if(this.state.movies){
            for(let film of this.state.movies){
                films.push(<MovieDisplay data = {film}/>)
            }
        }

        return(
            <div>
                <form>
                <label>Search Film:</label>
                <br></br>
                <input id="filmSearch" type="text" onChange={(this.handleInput)}></input>
                <input type="button" value="Submit" onClick={this.update}></input>
                {films}
                </form>

            {/* <MovieDisplay movieTitle={this.state.movies["Title"]} poster={this.state.movies["Poster"]}
             movieRelease={this.state.movies["Released"]} runtime={this.state.movies["Runtime"]} 
             rated={this.state.movies["Rated"]} plot={this.state.movies["Plot"]}/> */}
            </div>

        );
    }
}

export default SearchDB;