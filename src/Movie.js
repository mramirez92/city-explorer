import React, { Component } from 'react'
import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import './Movies.css'


export default class Movie extends Component {
  render() {
    let movieData = this.props.movie.map((movie) => (
      
      <Col class>
      <Card className= "movieCard"> 
        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt={movie.title} />
        <Card.Body>
          <Card.Title>{movie.title}</Card.Title>
          <div className="scrollable">
          <Card.Text>
            {movie.overview}
          </Card.Text>
          </div>
        </Card.Body>
      </Card>
   </Col>
 
    ))
    return (
      <Container>
          <Row xs={1} sm ={2}md={4} lg={5}> 
          {movieData}
           </Row>
        
     
     </Container>
    )
  }
}



