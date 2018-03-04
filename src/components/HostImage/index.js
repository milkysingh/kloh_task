import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const HostImage = (props) => {
  const style = {
    width: props.width,
    height: props.height,
    borderRadius: props.radius,
    border: '1px solid rgb(17, 17, 17)',
    float: props.float,
    position: props.position,
    top: props.top,
    right: props.right,
  };
  return (
    <div>
      <img src={props.hostPic} alt="host pic" style={style} />
    </div>
  );
};
export default HostImage;
HostImage.propTypes = {
  hostPic: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  radius: PropTypes.string,
  position: PropTypes.string,
  top: PropTypes.string,
  right: PropTypes.string,
  float: PropTypes.string,
};
HostImage.defaultProps = {
  width: '',
  height: '',
  radius: '',
  float: '',
  position: '',
  top: '',
  right: '',
};
