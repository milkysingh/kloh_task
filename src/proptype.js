import PropTypes from 'prop-types';

const ActivityPropType = PropTypes.shape({
  imageUrl: PropTypes.string,
  ownerProfileImageUrl: PropTypes.string,
  title: PropTypes.string,
  activityTitme: PropTypes.string
});

export default ActivityPropType;
