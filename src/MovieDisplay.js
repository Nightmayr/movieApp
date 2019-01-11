import React, { Component } from 'react';
import axios from 'axios';
import SearchDB from "./SearchDB";

class MovieDisplay extends Component{
    // constructor(){
    //     return(
    //         super(),
    //         this.state = {
    //             title: "",
    //             release: "",
    //             image: "",


    //         }
    //     );
    // }

    render(){
        return(
            <div className="film">
                <h3>{this.props.data.Title}</h3>
                <img src={this.props.data.Poster} alt=""></img>
                <br></br>
                <p>{this.props.data.Year}</p>
                <p>{this.props.data.Runtime}</p>
                <p>{this.props.data.Rated}</p>
                <p>{this.props.data.Plot}</p>
            </div>
        );
    }
}

export default MovieDisplay;