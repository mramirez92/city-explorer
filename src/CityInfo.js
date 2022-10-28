import React from 'react';
import Figure from 'react-bootstrap/Figure';

class Main extends React.Component{
  render(){
    return(
      <Figure>
      <Figure.Image
        alt ={this.props.city}
        src={this.props.map} 
      />
      <Figure.Caption>
        <h3>City Name:{this.props.city} </h3>
        <p>{this.props.lat}</p> 
        <p>{this.props.lon}</p>
      </Figure.Caption>
    </Figure>

    )
  };
}

export default Main;