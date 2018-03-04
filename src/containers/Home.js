import React, { Component } from 'react';
import axios from 'axios';
import { constants } from '../constants';
import CardList from '../components/CardList';
import Loader from '../components/Loader/index';
class Home extends Component {
  state = {
    activities: [],
    selectedActivity: null,
    isFetching: true,
    error: null
  };
  async componentDidMount() {
    try {
      const { data: { response: { results } } } = await axios.post(
        constants.getActivityUrl,
        constants.coordinates
      );

      this.setState({
        activities: results,
        isFetching: false
      });
    } catch (error) {
      console.log('hello');
      this.setState({
        error: error,
        isFetching: false
      });
    }
  }
  render() {
    return (
      <div>
        <div className="jumbotron container-fluid">
          <h1>Kloh Activities</h1>
          <p>There is a place for everyone</p>
        </div>
        {this.state.isFetching ? (
          <Loader />
        ) : (
          <CardList activities={this.state.activities} />
        )}
      </div>
    );
  }
}
export default Home;
