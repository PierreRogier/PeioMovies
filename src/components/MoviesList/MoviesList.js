import React, { Component } from "react";
import MovieElement from "./MovieElement/MovieElement";

export default class MoviesList extends Component {

    render() {
        return (
            <div className="w-75 d-flex justify-content-around flex-wrap">
                {this.props.movies.map((movie, index) => {
                    return <MovieElement updateSelectedMovie={()=>this.props.updateSelectedMovie(index)} key={movie.title + index} {...movie} />;
                })}
            </div>
        );
    }
}
