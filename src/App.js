import React, { Component } from "react";
import { Header, MoviesList, MovieDetails, Loader, SearchBar } from "./components";
import apiMovie, {apiMovieMap} from "./conf/api.movie";

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            movies: null,
            movieSelected: 0,
            loaded: false,
        };
    }

    updateSelectedMovie = (index) => {
        this.setState({ movieSelected: index });
    };

    componentDidMount() {
        apiMovie
            .get(`/discover/movie`)
            .then((res) => res.data.results)
            .then((moviesApi) => {
                const movies = moviesApi.map(apiMovieMap);
                this.updateMovies(movies);
            })
            .catch((err) => console.log(err));
    }

    updateMovies = (movies) => {
        this.setState({ movies: movies, loaded: true });
    };

    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <SearchBar updateMovies={this.updateMovies} />
                {this.state.loaded ? (
                    <div className="d-flex flex-fill pt-4 p-2">
                        <MoviesList movies={this.state.movies} updateSelectedMovie={this.updateSelectedMovie} />
                        <MovieDetails movie={this.state.movies[this.state.movieSelected]} />
                    </div>
                ) : (
                    <Loader />
                )}
            </div>
        );
    }
}
