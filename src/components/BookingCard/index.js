import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import ActivityTitle from '../ActivityTitle';
import HostImage from '../HostImage';
import classes from './style.css';

const BookingCard = (props) => {
  const {
    booking: {
      title, amount, ownerProfileImageUrl, activityDateString, ownerName,
    },
  } = props;
  return (
    <div className={`container-fluid ${classes.BookingCard}`}>
      <div className="row">
        <ActivityTitle title={title} />
        <HostImage
          hostPic={ownerProfileImageUrl}
          width="45px"
          height="45px"
          radius="50%"
          float="right"
          position="absolute"
          top="10px"
          right="20px"
        />
      </div>
      <div style={{ float: 'left' }}>
        <h5>
          <i>{ownerName}</i>
        </h5>
      </div>
      <div className={`container-fluid ${classes.BookingCardDetail}`}>
        <span>
          <i className="material-icons">date_range</i>

          {activityDateString}
        </span>

        <span> &#8377;{amount}</span>
        <button className="btn btn-primary">Buy now</button>
      </div>
    </div>
  );
};
export default BookingCard;
BookingCard.propTypes = {
  booking: PropTypes.shape({
    title: PropTypes.string,
    amount: PropTypes.number,
    ownerProfileImageUrl: PropTypes.string,
    activityDateString: PropTypes.string,
  }).isRequired,
};
