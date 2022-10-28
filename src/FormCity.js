import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'
import './FormCity.css'


class FormCity extends React.Component {

  render() {
    return (
      <div className='formDiv'>
        <Form onSubmit={this.props.getCityData}>
          <Form.Group className="city-form" >
            <Form.Label>Explore a new city:</Form.Label>
            <Form.Control type="city-input" placeholder="Enter City Name"  onInput={this.props.handleInput} />

          </Form.Group>
          <Button className="button" type="submit">
            Explore!
          </Button>
          
        </Form>
      </div>
    );
  };
}

export default FormCity;