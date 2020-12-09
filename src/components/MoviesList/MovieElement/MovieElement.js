import React, { Component } from "react";
import Style from "./MovieElement.module.scss";

export default class MovieElement extends Component {
    render() {
        return (
            <div onClick={this.props.updateSelectedMovie} className={`bg-light d-flex ${Style.container}`}>
                <img width="185" src={this.props.img} alt={this.props.title} />
                <div className="flex-fill d-flex flex-column p-3">
                    <h5>{this.props.title}</h5>
                    <hr className="w-100" />
                    <p>{this.props.details}</p>
                </div>
            </div>
        );
    }
}
