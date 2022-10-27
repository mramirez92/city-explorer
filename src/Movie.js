import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'
import './Movies.css'


export default class Movie extends Component {
  render() {
    let movieData = this.props.movie.map((movie) => (

      <Carousel.Item>
      <img
        className="carousel"
        src={`https://image.tmdb.org/t/p/w500/${movie.posterPath}`} alt= {movie.title}
      />
      <Carousel.Caption>
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
      </Carousel.Caption>
    </Carousel.Item>






      // <div>
      //   <p>
      //     {movie.title}
      //     <img  src={`https://image.tmdb.org/t/p/original/${movie.posterPath}`} alt= {movie.title}/>
          
      //   </p>
      //   <p>
      //     {movie.overview}
      //   </p>
      // </div>

    ))
    return (
      <div>
      <Carousel> 
        {movieData}
      </Carousel>
      </div>

      // <div>{movieData}</div>
    )
  }
}


  
 