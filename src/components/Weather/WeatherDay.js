import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import './WeatherDay.css'

export default class WeatherDay extends Component {
  render() {
    return (

      <ListGroup.Item>
        <p>{this.props.datetime}</p>
        <p>{this.props.description}</p>
      </ListGroup.Item>

    )
  }
}


