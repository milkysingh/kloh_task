import React from 'react';
import HostImage from '../HostImage';
import ActivityImage from '../ActivityImage';
import Time from '../Time';

import ActivityPropType from '../../proptype';
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
    <div className="card" style={{ width: '15rem' }}>
      <ActivityImage activityImage={imageUrl} />
      <HostImage hostPic={ownerProfileImageUrl} />
      <div className="card-block">
        <h4 className="card-title">{title}</h4>

        <Time time={activityDateString} />
        <button type="button" className="btn btn-success float-sm-right">
          Join
        </button>
      </div>
    </div>
  );
};
export default Card;
Card.propTypes = {
  activity: ActivityPropType.isRequired
};
