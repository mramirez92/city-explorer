import React from 'react';
import Figure from 'react-bootstrap/Figure';

class Main extends React.Component {
  render() {
    return (
      <Figure>
        <Figure.Caption>
          <p>City Name: {this.props.city} </p>
          <p>latitude: {this.props.lat}</p>
          <p>logitude: {this.props.lon}</p>
        </Figure.Caption>
        <Figure.Image
          alt={this.props.city}
          src={this.props.map}
        />
      </Figure>

    )
  };
}

export default Main;