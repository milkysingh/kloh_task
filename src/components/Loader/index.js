import { PulseLoader } from 'react-spinners';
import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import classes from './style.css';

const Loader = ({ loading }) => (
  <div className={classes.loader}>
    <PulseLoader color="#123abc" loading={loading} />
  </div>
);
export default Loader;
Loader.propTypes = {
  loading: PropTypes.bool.isRequired,
};
