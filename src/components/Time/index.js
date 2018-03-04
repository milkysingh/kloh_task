import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import classes from './style.css';

const Time = props => (
  <div>
    <span className={classes.time}>{props.time}</span>
  </div>
);
export default Time;
Time.propTypes = {
  time: PropTypes.string.isRequired,
};
