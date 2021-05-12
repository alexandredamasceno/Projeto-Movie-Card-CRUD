import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AddDetails extends Component {
  render() {
    const { movie } = this.props;
    const { storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details">
        <img alt="Movie Cover" src={ `../${imagePath}` } />
        <p>{ `Subtitle: ${subtitle}` }</p>
        <p>{ `Storyline: ${storyline}` }</p>
        <p>{ `Genre: ${genre}` }</p>
        <p>{ `Rating: ${rating}` }</p>
      </div>
    );
  }
}

AddDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
};

export default AddDetails;
