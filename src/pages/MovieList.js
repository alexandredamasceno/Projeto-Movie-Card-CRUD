import React, { Component } from 'react';
import MovieCard from '../components/MovieCard';
import Loading from '../components/Loading';

import * as movieAPI from '../services/movieAPI';

class MovieList extends Component {
  constructor() {
    super();

    this.state = {
      movies: [],
      isLoading: false,
    };
  }

  componentDidMount() {
    this.handleMovies();
  }

  handleMovies = () => {
    this.setState({ isLoading: true });
    movieAPI.getMovies().then((response) => this.setState({
      movies: response,
      isLoading: false,
    }));
  }

  render() {
    const { movies, isLoading } = this.state;

    // Render Loading here if the request is still happening

    return (
      <div data-testid="movie-list">
        <p>
          {isLoading === true ? <Loading /> : null }
        </p>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
