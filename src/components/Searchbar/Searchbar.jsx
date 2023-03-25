import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';
import { ImSearch } from 'react-icons/im';

export class Searchbar extends Component {
  static propTypes = {
    onSearch: PropTypes.func.isRequired,
  };

  state = {
    query: '',
  };

  handleQueryChange = event => {
    this.setState({ query: event.currentTarget.value.toLowerCase() });
  };

  handleQuerySubmit = event => {
    event.preventDefault();
    const { query } = this.state;

    if (query.trim() === '') {
      alert('Please enter a valid search request!');
      return;
    }

    this.props.onSearch(query);
    this.reset();
  };

  reset = () => {
    this.setState({ query: '' });
  };

  render() {
    return (
      <header className={css.Searchbar}>
        <form className={css.SearchForm} onSubmit={this.handleQuerySubmit}>
          <button type="submit" className={css.SearchForm__button}>
            <ImSearch />
          </button>

          <input
            className={css.SearchForm__input}
            type="text"
 
            placeholder="Search images and photos"
            value={this.state.query}
            onChange={this.handleQueryChange}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
