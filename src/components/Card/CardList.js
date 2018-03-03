import React from "react";
import PropTypes from "prop-types";
import Card from "../Card/Card";
import classes from "./cardList.css";
import { Link } from "react-router-dom";

const CardList = props => {
  const renderActivityList = () => {
    return props.activities.map(activity => {
      return (
        <Link
          to={`/activity/${activity.activityId}`}
          key={activity.activityId}
          style={{ textDecoration: "none", color: "inherit" }}
          className={classes.ListItem}
        >
          <Card activity={activity} />
        </Link>
      );
    });
  };
  return (
    <div className="container">
      <div className={classes.List}>{renderActivityList()}</div>
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  activities: PropTypes.array
};
