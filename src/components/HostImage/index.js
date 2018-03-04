import React from 'react';
import PropTypes from 'prop-types';
import classes from './style.css';

const HostImage = props => {
  return (
    <div>
      <img className={classes.imgCircle} src={props.hostPic} alt="host pic" />
    </div>
  );
};
export default HostImage;
HostImage.propTypes = {
  hostPic: PropTypes.string
};
