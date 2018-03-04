import React, { Component } from 'react';
import axios from 'axios';
import constants from '../constants';
import CardList from '../components/CardList';
import Loader from '../components/Loader/index';
import Error from '../components/Error';

class Home extends Component {
  state = {
    activities: [],
    isFetching: true,
    error: null,
  };
  componentDidMount() {
    setTimeout(async () => {
      try {
        // eslint-disable-next-line
        const { data: { response: { results } } } = await axios.post(
          constants.getActivityUrl,
          constants.coordinates,
        );
        // eslint-disable-next-line
        this.setState({
          activities: results,
          isFetching: false,
        });
      } catch (error) {
        // eslint-disable-next-line
        this.setState({
          error: 'Something went wring',
          isFetching: false,
        });
      }
    }, 2000);
  }

  render() {
    if (this.state.isFetching) {
      return <Loader loading />;
    }

    if (this.state.error) {
      return <Error error={this.state.error} />;
    }

    return (
      <div>
        <div className="jumbotron container-fluid">
          <h1>Kloh Activities</h1>
          <p>There is a place for everyone</p>
        </div>
        <CardList activities={this.state.activities} />
      </div>
    );
  }
}
export default Home;
