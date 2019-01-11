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
            <div>
                <h3>{this.props.movieTitle}</h3>
                <img src={this.props.poster} alt=""></img>
                <br></br>
                <p>{this.props.movieRelease}</p>
                <p>{this.props.runtime}</p>
                <p>{this.props.rated}</p>
                <p>{this.props.plot}</p>
            </div>
        );
    }
}

export default MovieDisplay;