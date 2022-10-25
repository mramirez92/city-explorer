import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class FormCity extends React.Component {

  render() {
    return (
      <div>
        <Form onSubmit={this.props.getCityData}>
          <Form.Group className="city-form" >
            <Form.Label>City:</Form.Label>
            <Form.Control type="city-input" placeholder="Enter City Name"  onInput={this.props.handleInput} />

          </Form.Group>
          <Button type="submit">
            Explore!
          </Button>
          
        </Form>
      </div>
    );
  };
}

export default FormCity;