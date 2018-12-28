import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect, isLoaded, isEmpty } from "react-redux-firebase";

import RestaurantList from "../RestaurantList/RestaurantList";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapState = state => ({
  restaurants: state.firestore.ordered.restaurants
});

class RestaurantDashboard extends Component {
  render() {
    const { restaurants } = this.props;
    if (!isLoaded(restaurants || isEmpty(restaurants))) return <LoadingComponent inverted />;
    return (
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    );
  }
}

export default connect(mapState)(firestoreConnect([{ collection: "restaurants" }])(RestaurantDashboard));
