import React from 'react';
import PropTypes from 'prop-types';

import './TrafficLightRequest.scss';

const TrafficLightRequest = ({ clase, estado }) => (
  <div className={`estado-estandar ${clase}`}>{estado}</div>
);

TrafficLightRequest.propTypes = {
  clase: PropTypes.string.isRequired,
  estado: PropTypes.string.isRequired,
};

export default TrafficLightRequest;
