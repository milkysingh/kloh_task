import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import classes from './style.css';

const ActivityTitle = ({ title }) => (
  <div>
    <h3 className={classes.ActivityTitle}>{title}</h3>
  </div>
);
export default ActivityTitle;

ActivityTitle.propTypes = {
  title: PropTypes.string.isRequired,
};
