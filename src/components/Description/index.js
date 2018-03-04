import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const Description = ({ description }) => (
  <div>
    <p style={{ fontFamily: 'Arima Madurai, cursive;', fontSize: '20px' }}>{description}</p>
  </div>
);
export default Description;

Description.propTypes = {
  description: PropTypes.string.isRequired,
};
