import React from 'react';

class Main extends React.Component{
  render(){
    return(
      <div>
      <section>
        <p>City Name:{this.props.city}</p> 
        <p>{this.props.lat}</p> 
        <p>{this.props.lon}</p>
        <p>{this.props.weatherData}</p>
        <img src={this.props.map} alt ={this.props.city}/>
      </section>
      </div>
    )
  };
}

export default Main;