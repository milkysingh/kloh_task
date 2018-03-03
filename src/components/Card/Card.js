import React from "react";
import HostImage from "./HostImage";
import ActivityImage from "./ActivityImage";
import Time from "./Time";
import PropTypes from "prop-types";

const Card = ({
  activity: {
    imageUrl,
    ownerProfileImageUrl,
    title,
    description,
    activityTime: { activityDateString }
  }
}) => {
  return (
    <div className="card" style={{ width: "15rem" }}>
      <ActivityImage activityImage={imageUrl} />
      <HostImage hostPic={ownerProfileImageUrl} />
      <div className="card-block">
        <h4 className="card-title">{title}</h4>
        <p className="card-text">{description}</p>
        <Time time={activityDateString} />
        <button type="button" className="btn btn-dark float-sm-right">
          Join
        </button>
      </div>
    </div>
  );
};
export default Card;
Card.propTypes = {
  activity: PropTypes.object
};
