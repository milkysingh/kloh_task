import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
const Error = props => <div className="alert alert-danger">{props.error}</div>;
export default Error;
Error.propTypes = {
  error: PropTypes.string.isRequired,
};
