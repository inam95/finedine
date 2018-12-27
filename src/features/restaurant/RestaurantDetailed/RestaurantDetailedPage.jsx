import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirestore } from "react-redux-firebase";

import RestaurantDetailedHeader from "./RestaurantDetailedHeader";

import "./RestaurantDetailed.css";
import RestaurantDetailedFooter from "./RestaurantDetailedFooter";
import { objectToArray } from "../../../app/common/util/helpers";
import { likePlace, bookMarkPlace } from "../../user/userActions";

const mapState = state => {
  let restaurant = {};

  if (state.firestore.ordered.restaurants && state.firestore.ordered.restaurants[0]) {
    restaurant = state.firestore.ordered.restaurants[0];
  }

  return {
    restaurant,
    auth: state.firebase.auth
  };
};

const actions = {
  likePlace,
  bookMarkPlace
};

class RestaurantDetailedPage extends Component {
  async componentDidMount() {
    const { firestore, match } = this.props;
    await firestore.setListener(`restaurants/${match.params.id}`);
    // if (!restaurant.exists) {
    //   history.push("/restaurants");
    //   toastr.error("Sorry", "Place not found");
    // }
  }

  async componentWillUnmount() {
    const { firestore, match } = this.props;
    await firestore.unsetListener(`restaurants/${match.params.id}`);
  }

  render() {
    const { restaurant, auth, likePlace, bookMarkPlace } = this.props;

    const placeLatLng = restaurant && restaurant.placeLatLng && objectToArray(restaurant.placeLatLng);

    const likedBy = restaurant && restaurant.likedBy && objectToArray(restaurant.likedBy);
    const isLike = likedBy && likedBy.some(l => l.id === auth.uid);

    const bookmarkedBy = restaurant && restaurant.bookmarkedBy && objectToArray(restaurant.bookmarkedBy);
    const isBookmarked = bookmarkedBy && bookmarkedBy.some(b => b.id === auth.id);

    // const whoBookMarked = restaurant && restaurant.whoBookMarked && objectToArray(restaurant.whoBookMarked);
    // const isBookMark = whoBookMarked && whoBookMarked.some(w => w.id === auth.id);
    // console.log(isBookMark);

    return (
      <div className="detail-container">
        <RestaurantDetailedHeader
          restaurant={restaurant}
          isLike={isLike}
          likePlace={likePlace}
          isBookmarked={isBookmarked}
          bookMarkPlace={bookMarkPlace}
        />
        <RestaurantDetailedFooter restaurant={restaurant} placeLatLng={placeLatLng} />
      </div>
    );
  }
}

export default withFirestore(
  connect(
    mapState,
    actions
  )(RestaurantDetailedPage)
);
