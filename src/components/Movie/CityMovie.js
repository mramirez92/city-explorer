import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import './Movies.css'

export default class CityMovie extends Component {
  render() {
    return (
      <Card>
        <Card.Img className="map" variant="top" src={`https://image.tmdb.org/t/p/w500/${this.props.posterPath}`} alt={this.props.title} />
        <Card.Body>
          <Card.Title>{this.props.title}</Card.Title>
          <div className="scrollable">
            <Card.Text className="movieText">
              {this.props.overview}
            </Card.Text>
          </div>
        </Card.Body>
      </Card>
      
    )
  }
}
