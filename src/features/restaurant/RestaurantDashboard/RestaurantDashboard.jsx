import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import RestaurantList from "../RestaurantList/RestaurantList";
import LoadingComponent from "../../../app/layout/LoadingComponent";

const mapState = state => ({
  restaurants: state.firestore.ordered.restaurants,
  loading: state.async.loading
});

class RestaurantDashboard extends Component {
  render() {
    const { restaurants, loading } = this.props;
    if (loading) return <LoadingComponent inverted />;
    return (
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    );
  }
}

export default connect(mapState)(
  firestoreConnect([{ collection: "restaurants" }])(RestaurantDashboard)
);
