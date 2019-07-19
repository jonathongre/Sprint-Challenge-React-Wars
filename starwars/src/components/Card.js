import React, { Component } from "react";
import Container from '@material-ui/core/Container';

export default class Card extends Component {
  render() {
    return (
      <Container maxWidth="sm">
        <div style={{ backgroundColor: '#fff', opacity: 0.5, borderRadius: '30px', boxShadow: '2px 2px 10px black' }}>
        <h1>{this.props.data.name}</h1>
        <h3>Height: {this.props.data.height}</h3>
        <h3>Mass: {this.props.data.mass}</h3>
        <h3>Hair Color: {this.props.data.hair_color}</h3>
        <h3>Skin Color: {this.props.data.skin_color}</h3>
        <h3>Eye Color: {this.props.data.eye_color}</h3>
        <h3>Birth Year: {this.props.data.birth_year}</h3>
        <h3>Gender: {this.props.data.gender}</h3>
        </div>
      </Container>
    );
  }
}