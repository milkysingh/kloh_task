import React, { Component } from 'react';
import axios from 'axios';
class ActivityDetail extends Component {
  async componentWillMount() {
    const AID = this.props.match.params.id;
    const { data: { response } } = await axios.get(
      `https://api.kloh.in/kloh/external/v1/activity/${AID}`
    );
    console.log(response);
  }

  render() {
    return (
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              src="https://i-cdn.phonearena.com/images/articles/317743-thumb/oled-smartphone-wallpapers.jpg"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              src="https://resize.indiatvnews.com/en/centered/newbucket/715_431/2018/03/910x0xlandscapeholi-wishes-for-whatsapp-5a6087987fc55-1519881162.jpg"
              alt="Second slide"
            />
          </div>
        </div>
        <a className="carousel-control-prev" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="sr-only">Previous</span>
        </a>
        <a
          className="carousel-control-next"
          href="#carouselExampleControls"
          role="button"
          data-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
}
export default ActivityDetail;
