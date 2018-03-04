import React, { Component } from 'react';
import axios from 'axios';
import Error from '../components/Error';
import Loader from '../components/Loader/index';
import CarouselImage from '../components/CarouselImage';
import constants from '../constants';
import BookingCard from '../components/BookingCard';
import Description from '../components/Description';
import MapView from '../components/MapView';

class ActivityDetail extends Component {
  state = {
    activity: null,
    isFetching: true,
    error: null,
  };
  async componentWillMount() {
    const AID = this.props.match.params.id;
    try {
      const { data: { response } } = await axios.get(`https://api.kloh.in/kloh/external/v1/activity/${AID}`);
      this.setState({ activity: response, isFetching: false });
    } catch (error) {
      this.setState({
        error: constants.ERROR_MESSAGE,
        isFetching: false,
      });
    }
  }

  render() {
    if (this.state.isFetching) {
      return <Loader loading />;
    }
    if (this.state.error) {
      return <Error error={this.state.error} />;
    }
    const {
      imageUrl,
      description,
      title,
      amount,
      ownerProfileImageUrl,
      activityTime: { activityDateString },
      location: { lat, lon },
      ownerName,
    } = this.state.activity;

    const bookingDetails = {
      title,
      amount,
      ownerProfileImageUrl,
      activityDateString,
      ownerName,
    };

    return (
      <div className="container-fluid jumbotron">
        <div className="row">
          <div className="col xs-10">
            <CarouselImage imageUrl={imageUrl} />
          </div>
          <div className="col xs-2">
            <BookingCard booking={bookingDetails} />
          </div>
        </div>
        <div className="container">
          <Description description={description} />

          <div>
            <MapView
              lat={lat}
              lng={lon}
              isMarkerShown
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: '100%' }} />}
              containerElement={<div style={{ height: '400px' }} />}
              mapElement={<div style={{ height: '100%' }} />}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default ActivityDetail;
