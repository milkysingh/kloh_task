import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

const ActivityImage = props => (
  <div>
    <img className="card-img-top" src={props.activityImage} alt="Card img cap" />
  </div>
);
export default ActivityImage;
ActivityImage.propTypes = { activityImage: PropTypes.string.isRequired };
