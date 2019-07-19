import React, { Component } from "react";
import axios from "axios";
import Character from "./components/Character";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    };
  }
  componentDidMount() {
    axios.get(`https://swapi.co/api/people/`).then(response => {
      this.setState({
        data: response.data
      });
    });
  }
  render() {
    return (
      <>
        <Character data={this.state.data} />
      </>
    );
  }
}