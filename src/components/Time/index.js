import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.css';
const Time = props => {
  return (
    <div>
      <span className={classes.time}>{props.time}</span>
    </div>
  );
};
export default Time;
Time.propTypes = {
  time: PropTypes.string
};
