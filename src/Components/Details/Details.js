import React from 'react';
import axios from 'axios';
import ReactCarousel from '../../Components/Details/Carousel';
import ReactTab from './React-tabs';
import Header from "../../Components/Filter/Header"

class Details extends React.Component {
  constructor() {
    super();
    this.state = {
      restaurants: []
    }
  }
  componentDidMount() {
    axios({
      method: 'GET',
      url: "http://localhost:3500/getAllRestaurants",
      headers: { 'Content-Type': 'application/json' }
    })
      .then(response => {
        console.log(response.data);
        this.setState({ restaurants: response.data.restaurants })
      })
      .catch(err => console.log(err))

  }
  render() {
    const { restaurants } = this.state
    return (
      <div>
        <div>
          <Header />
        </div>
        <div>
          <ReactCarousel />
          <ReactTab restaurantsData={restaurants} />
        </div>
      </div>
    )
  }
}

export default Details;