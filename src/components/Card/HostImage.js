import React from "react";
import PropTypes from "prop-types";
import classes from "./hostImage.css";

const HostImage = props => {
  console.log(props.hostPic);
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
