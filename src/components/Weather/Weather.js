import React, { Component } from 'react'
import ListGroup from 'react-bootstrap/ListGroup'
import Card from 'react-bootstrap/Card'
import WeatherDay from './WeatherDay'
import './Weather.css'

export default class Weather extends Component {
  render() {
    let weatherData = this.props.weather.map((day) => {
      return (
        <WeatherDay
          datetime={day.datetime}
          description={day.description}
        />
      )
    })
    return (
      <Card>
        <Card.Header>weather</Card.Header>
        <ListGroup variant="flush">
          {weatherData}
        </ListGroup>
      </Card>
    )
  }
}



