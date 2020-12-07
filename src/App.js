import React, { Component } from "react";
import { Header, MoviesList, MovieDetails } from "./components";

export default class App extends Component {
    render() {
        return (
            <div className="App d-flex flex-column">
                <Header />
                <div className="d-flex flex-fill pt-4 p-2">
                    <MoviesList />
                    <MovieDetails />
                </div>
            </div>
        );
    }
}
