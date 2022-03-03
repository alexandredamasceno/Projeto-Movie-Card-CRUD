import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import '../css/MovieDetails.css';

class AddDetails extends Component {
  render() {
    const { movie, handleDeleteMovie } = this.props;
    const { id, title, storyline, imagePath, genre, rating, subtitle } = movie;

    return (
      <div data-testid="movie-details" className="container-md">
        <img className="details-img" alt="Movie Cover" src={ `../${imagePath}` } />
        <div>
          <p>{ `Title: ${title}` }</p>
          <p>{ `Subtitle: ${subtitle}` }</p>
          <p>{ `Storyline: ${storyline}` }</p>
          <p>{ `Genre: ${genre}` }</p>
          <p>{ `Rating: ${rating}` }</p>
          <div className="btn-group">
            <Link className="btn btn-success" to="/">VOLTAR</Link>
            <Link className="btn btn-warning" to={ `/movies/${id}/edit` }>EDITAR</Link>
            <button
              className="btn btn-danger"
              type="button"
              onClick={ handleDeleteMovie }
            >
              DELETAR
            </button>
          </div>
        </div>
      </div>
    );
  }
}

AddDetails.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
    genre: PropTypes.string,
  })).isRequired,
  handleDeleteMovie: PropTypes.func.isRequired,
};

export default AddDetails;
