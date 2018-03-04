import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';

// import style from './style.css';

const CarouselImage = ({ imageUrl }) => (
  <div className="container-fluid">
    <img
      className="img-fluid"
      src={imageUrl}
      alt="actitvity"
      style={{
        width: '80%',
        height: '500px',
        marginTop: '-60px',
        padding: '20px 20px 20px',
        borderRadius: '10%',
      }}
    />
  </div>
);

export default CarouselImage;
CarouselImage.propTypes = {
  imageUrl: PropTypes.string.isRequired,
};
