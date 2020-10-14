import React from 'react';
import PropTypes from 'prop-types';
import './TitleView.scss';

const TitleView = ({ texto }) => (
  <h1>{texto}</h1>
);
TitleView.propTypes = {
  texto: PropTypes.string.isRequired,
};
export default TitleView;
