import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";
import { toastr } from "react-redux-toastr";

import RestaurantDetailedHeader from "./RestaurantDetailedHeader";

import "./RestaurantDetailed.css";
import RestaurantDetailedFooter from "./RestaurantDetailedFooter";

const mapState = state => {
  let restaurant = {};

  if (state.firestore.ordered.restaurants && state.firestore.ordered.restaurants[0]) {
    restaurant = state.firestore.ordered.restaurants[0];
  }

  return {
    restaurant
  };
};

class RestaurantDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match, history } = this.props;
    let restaurant = await firestore.get(`restaurants/${match.params.id}`);
    if (!restaurant.exists) {
      history.push("/restaurants");
      toastr.error("Sorry", "Event not found");
    }
  }

  render() {
    const { restaurant } = this.props;

    return (
      <div className="detail-container">
        <RestaurantDetailedHeader restaurant={restaurant} />
        <RestaurantDetailedFooter restaurant={restaurant} />
      </div>
    );
  }
}

export default withFirestore(connect(mapState)(RestaurantDetailedPage));
