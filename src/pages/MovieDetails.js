import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AddDetails from './AddDetails';

import * as movieAPI from '../services/movieAPI';
import { Loading } from '../components';

class MovieDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      loading: false,
    };
  }

  componentDidMount() {
    this.handleUpdateMovies();
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
    const { movies, loading } = this.state;

    return (
      <div>
        { loading === true ? <Loading /> : <AddDetails movie={ movies } /> }
      </div>
    );
  }
}

MovieDetails.propTypes = {
  match: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieDetails;
