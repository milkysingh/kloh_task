import React from 'react';
import { Link } from 'react-router-dom';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import Card from '../Card';
import classes from './style.css';

import ActivityPropType from '../../proptype';

const CardList = (props) => {
  const renderActivityList = () =>
    props.activities.map(activity => (
      <Link
        to={`/activity/${activity.activityId}`}
        key={activity.activityId}
        style={{ textDecoration: 'none', color: 'inherit' }}
        className={classes.ListItem}
      >
        <Card activity={activity} />
      </Link>
    ));
  return (
    <div className="container">
      <div className={classes.List}>{renderActivityList()}</div>
    </div>
  );
};

export default CardList;

CardList.propTypes = {
  activities: PropTypes.arrayOf(ActivityPropType).isRequired,
};
