import React, { Component } from "react";
// import axios from "axios";
import { constants } from "../constants";
import CardList from "../components/Card/CardList";
import Loader from "../components/Loader";
class Home extends Component {
  state = {
    activities: [],
    selectedActivity: null,
    isFetching: true,
    error: null
  };
  async componentDidMount() {
    try {
      //   const { response: { results } } = await axios.post(
      //     constants.getActivityUrl,
      //     constants.coordinates
      //   );
      setTimeout(() => {
        this.setState({
          activities: constants.mockData,
          isFetching: false
        });
      }, 1000);
    } catch (error) {
      this.setState({
        error: error,
        isFetching: false
      });
    }
  }
  render() {
    console.log(this.state.activities);
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
