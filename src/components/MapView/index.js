import React from 'react';
// eslint-disable-next-line
import PropTypes from 'prop-types';
import { withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

const MapView = withGoogleMap(({ lat, lng, isMarkerShown }) => (
  <GoogleMap defaultZoom={8} defaultCenter={{ lat, lng }}>
    {isMarkerShown && <Marker position={{ lat, lng }} />}
  </GoogleMap>
));
export default MapView;

MapView.propTypes = {};
