import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form'


class FormCity extends React.Component {

  render() {
    return (
      <div>
        <Form>
          <Form.Group className="city-form" onSubmit="">
            <Form.Label>City:</Form.Label>
            <Form.Control type="city-input" placeholder="City name or Zipcode" onInput="" />

          </Form.Group>
          <Button type="submit">
            Submit
          </Button>
        </Form>
      </div>
    );
  };
}

export default FormCity;