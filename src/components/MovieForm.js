import React from 'react';
import PropTypes from 'prop-types';
import '../css/MovieForm.css';

class MovieForm extends React.Component {
  constructor(props) {
    super(props);
    // No estado é { ...props.movie } lembrar de colocar de volta!
    this.state = { ...props.movie };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit() {
    const { onSubmit } = this.props;
    onSubmit(this.state);
  }

  updateMovie(field, newValue) {
    this.setState({ [field]: newValue });
  }

  renderTitleInput() {
    const { title } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_title">
          Título
          <input
            placeholder="Insira o título"
            id="movie_title"
            type="text"
            className="validate form-control"
            value={ title }
            onChange={ (event) => this.updateMovie('title', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubtitleInput() {
    const { subtitle } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_subtitle">
          Subtítulo
          <input
            placeholder="Insira o subtítulo"
            id="movie_subtitle"
            className="form-control"
            type="text"
            value={ subtitle }
            onChange={ (event) => this.updateMovie('subtitle', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderImagePathInput() {
    const { imagePath } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_image">
          Imagem
          <input
            placeholder="Insira o caminho da imagem"
            id="movie_image"
            type="text"
            className="form-control"
            value={ imagePath }
            onChange={ (event) => this.updateMovie('imagePath', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderStorylineInput() {
    const { storyline } = this.state;

    return (
      <div className="mb-3">
        <label htmlFor="movie_storyline">
          Sinopse
          <textarea
            id="movie_storyline"
            value={ storyline }
            className="form-control"
            onChange={ (event) => this.updateMovie('storyline', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderGenreSelection() {
    const { genre } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="movie_genre">
          Gênero
          <select
            id="movie_genre"
            value={ genre }
            onChange={ (event) => this.updateMovie('genre', event.target.value) }
            className="form-select"
          >
            <option value="action">Ação</option>
            <option value="comedy">Comédia</option>
            <option value="thriller">Suspense</option>
            <option value="fantasy">Fantasia</option>
          </select>
        </label>
      </div>
    );
  }

  renderRatingInput() {
    const { rating } = this.state;
    return (
      <div className="mb-3">
        <label htmlFor="movie_rating">
          Avaliação
          <input
            placeholder="Avalie"
            id="movie_rating"
            type="number"
            step={ 0.1 }
            min={ 0 }
            max={ 5 }
            value={ rating }
            className="form-control"
            onChange={ (event) => this.updateMovie('rating', event.target.value) }
          />
        </label>
      </div>
    );
  }

  renderSubmitButton() {
    return (
      <div>
        <button
          type="button"
          onClick={ this.handleSubmit }
          className="btn btn-primary"
        >
          Submit
        </button>
      </div>
    );
  }

  render() {
    return (
      <div className="form">
        <form>
          {this.renderTitleInput()}
          {this.renderSubtitleInput()}
          {this.renderImagePathInput()}
          {this.renderStorylineInput()}
          {this.renderGenreSelection()}
          {this.renderRatingInput()}
          {this.renderSubmitButton()}
        </form>
      </div>
    );
  }
}

MovieForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default MovieForm;
