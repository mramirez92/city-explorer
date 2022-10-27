import React, { Component } from 'react'

export default class Movie extends Component {
  render() {
    let movieData = this.props.movie.map((movie) => (
      <div>
        <p>
          {movie.title}
        </p>
        <p>
          {movie.overview}
        </p>
      </div>

    ))
    return (

      <div>{movieData}</div>
    )
  }
}
