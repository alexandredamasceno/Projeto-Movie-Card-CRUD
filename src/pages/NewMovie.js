import React, { Component } from 'react';
import { Redirect } from 'react-router';

import MovieForm from '../components/MovieForm';
import * as movieAPI from '../services/movieAPI';

class NewMovie extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isRedirected: false,
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // A função abaixo tem um parâmetro chamado 'newMovie' colocar de volta!
  handleSubmit(newMovie) {
    movieAPI.createMovie(newMovie).then(() => this.setState({ isRedirected: true }));
  }

  render() {
    const { isRedirected } = this.state;

    if (isRedirected === true) {
      return <Redirect to="/" />;
    }
    return (
      <div data-testid="new-movie">
        <MovieForm onSubmit={ this.handleSubmit } />
      </div>
    );
  }
}
export default NewMovie;
