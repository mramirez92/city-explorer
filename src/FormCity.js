import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class FormCity extends React.Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="city-form" onSubmit={this.props.getCityData}>
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