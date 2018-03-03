import React from "react";
import PropTypes from "prop-types";

const ActivityImage = props => {
  return (
    <div>
      <img
        className="card-img-top"
        src={props.activityImage}
        alt="Card img cap"
      />
    </div>
  );
};
export default ActivityImage;
ActivityImage.propTypes = { activityImage: PropTypes.string };
