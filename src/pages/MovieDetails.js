import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';
import AddDetails from './AddDetails';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
      isRequired: false,
    };
  }

  componentDidMount() {
    this.handleUpdateMovies();
  }

  handleDeleteMovie = () => {
    const { match: { params: { id } } } = this.props;
    movieAPI.deleteMovie(id).then(() => this.setState({ isRequired: true }));
  }

  handleUpdateMovies = () => {
    const { match: { params: { id } } } = this.props;
    this.setState({ loading: true });
    console.log(id);
    movieAPI.getMovie(id)
      .then((movie) => this.setState({ movies: movie, loading: false }));
  }

  render() {
    // Change the condition to check the state
    // if (true) return <Loading />;

    // title da const abaixo
    const { movies, loading, isRequired } = this.state;

    if (isRequired === true) {
      return <Redirect to="/" />;
    }

    return (
      <div>
        { loading === true
          ? <Loading />
          : <AddDetails movie={ movies } handleDeleteMovie={ this.handleDeleteMovie } /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
