import React, { Component } from 'react'
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'


export default class Weather extends Component {

  render() {
    let weatherData = this.props.weather.map((day)=>(

      <Accordion>
      <Card>
        <Card.Header>
          <Accordion.Toggle as={Button} variant="link" eventKey="0">
          {day.date}
          </Accordion.Toggle>
        </Card.Header>
        <Accordion.Collapse eventKey="0">
          <Card.Body>{day.description}</Card.Body>
        </Accordion.Collapse>
      </Card>
      </Accordion>
    ))
    return (
  
      <div>
        <p>Weather</p>
      {weatherData}
      </div>
     
    )
  }
}


  
