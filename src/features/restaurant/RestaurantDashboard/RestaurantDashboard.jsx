import React, { Component } from "react";
import { connect } from "react-redux";

import RestaurantList from "../RestaurantList/RestaurantList";

const mapState = state => ({
  restaurants: state.restaurants
});

class RestaurantDashboard extends Component {
  render() {
    const { restaurants } = this.props;
    return (
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    );
  }
}

export default connect(mapState)(RestaurantDashboard);
