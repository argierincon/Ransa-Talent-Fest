import React from 'react';
import PropTypes from 'prop-types';

const TitleLoginRegister = ({ titulo }) => <h3>{titulo}</h3>;

TitleLoginRegister.propTypes = {
  titulo: PropTypes.string.isRequired,
};

export default TitleLoginRegister;
