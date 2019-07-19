import React, { Component } from "react";
import Card from "./Card";

export default class Objects extends Component {
  render() {
    if (!this.props.data.results) {
      return <h1 className="hide">Warp Speed...</h1>;
    }

    return (
      <div>
        {this.props.data.results.map(person => (
          <Card data={person} />
        ))}
      </div>
    );
  }
}