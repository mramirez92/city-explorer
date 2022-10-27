import React, { Component } from 'react'

export default class Weather extends Component {

  render() {
    let weatherData = this.props.weather.map((day)=>(
      <div> 
        <p>{day.date}</p>
        <p>{day.description}</p>
      </div>
    ))
    return (
      <div>{weatherData}</div>
    )
  }
}

