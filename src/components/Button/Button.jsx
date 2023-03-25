import React, { Component } from 'react';
import css from 'components/styles.module.css';
import PropTypes from 'prop-types';

export const Button = ({ handleLoadMore }) => {
  return (
    <button className={css.Button} type="button" onClick={handleLoadMore}>
      Load more
    </button>
  );
};

Button.propTypes = {
  handleLoadMore: PropTypes.func.isRequired,
};
