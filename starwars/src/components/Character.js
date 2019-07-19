import React, { Component } from "react";
import Card from "./Card";
import Circular from "./Progress";

export default class Objects extends Component {
  render() {
    if (!this.props.data.results) {
      return ( 
          <div>
        <h1 className="hide">Warp Speed...</h1>
        <Circular />
          </div>
        )
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