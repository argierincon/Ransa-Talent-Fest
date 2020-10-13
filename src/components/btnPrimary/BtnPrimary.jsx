import React from 'react';
import PropTypes from 'prop-types';
import './BtnPrimary.scss';

const BtnPrimary = ({ texto }) => (
  <button type="submit" className="btn-primario">
    {texto}
  </button>
);

BtnPrimary.propTypes = {
  texto: PropTypes.string.isRequired,
};

export default BtnPrimary;
