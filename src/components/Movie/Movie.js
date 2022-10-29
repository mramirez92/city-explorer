import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import CityMovie from './CityMovie';

export default class Movie extends Component {
  render() {
    let movieData = this.props.movie.map((movie) => {
      return(
        <CityMovie
        posterPath = {movie.posterPath}
        title= {movie.title}
        overview= {movie.overview}
        />
  )}
  )
    return (
      <Container>
          {movieData}
     </Container>
    )
  }
}



