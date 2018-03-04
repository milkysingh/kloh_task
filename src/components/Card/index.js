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

    activityTime: { activityDateString },
  },
}) => (
  <div className="card" style={{ width: '17rem', height: '17rem' }}>
    <ActivityImage activityImage={imageUrl} />

    <HostImage
      hostPic={ownerProfileImageUrl}
      width="35px"
      height="35px"
      radius="50%"
      float="right"
      position="absolute"
      top="100px"
      right="0px"
    />
    <div className="card-block">
      <h4 className="card-title">{title}</h4>

      <Time time={activityDateString} />
      <button type="button" className="btn btn-success float-sm-right">
        Join
      </button>
    </div>
  </div>
);
export default Card;
Card.propTypes = {
  // eslint-disable-next-line
  activity: ActivityPropType.isRequired,
};
