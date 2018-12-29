import React, { Component } from "react";
import { connect } from "react-redux";
import { withFirestore, firebaseConnect, isEmpty } from "react-redux-firebase";
import { compose } from "redux";

import RestaurantDetailedHeader from "./RestaurantDetailedHeader";

import "./RestaurantDetailed.css";
import RestaurantDetailedFooter from "./RestaurantDetailedFooter";
import { objectToArray, createDataTree } from "../../../app/common/util/helpers";
import { likePlace, bookMarkPlace } from "../../user/userActions";
import { addReviews } from "../restaurantAction";
import { openModal } from "../../modals/modalActions";

const mapState = (state, ownProps) => {
  let restaurant = {};

  if (state.firestore.ordered.restaurants && state.firestore.ordered.restaurants[0]) {
    restaurant = state.firestore.ordered.restaurants[0];
  }

  return {
    restaurant,
    auth: state.firebase.auth,
    restaurantChat:
      !isEmpty(state.firebase.data.restaurant_chat) &&
      objectToArray(state.firebase.data.restaurant_chat[ownProps.match.params.id])
  };
};

const actions = {
  likePlace,
  bookMarkPlace,
  addReviews,
  openModal
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
    const { openModal, restaurant, auth, likePlace, bookMarkPlace, addReviews, restaurantChat } = this.props;

    const placeLatLng = restaurant && restaurant.placeLatLng && objectToArray(restaurant.placeLatLng);

    const likedBy = restaurant && restaurant.likedBy && objectToArray(restaurant.likedBy);
    const isLike = likedBy && likedBy.some(l => l.id === auth.uid);

    const bookmarkedBy = restaurant && restaurant.bookmarkedBy && objectToArray(restaurant.bookmarkedBy);
    const isBookmarked = bookmarkedBy && bookmarkedBy.some(b => b.id === auth.id);

    const chatTree = !isEmpty(restaurantChat) && createDataTree(restaurantChat);

    const authenticated = auth.isLoaded && !auth.isEmpty;

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
          authenticated={authenticated}
          openModal={openModal}
        />
        <RestaurantDetailedFooter
          restaurant={restaurant}
          placeLatLng={placeLatLng}
          addReviews={addReviews}
          restaurantChat={chatTree}
          authenticated={authenticated}
          openModal={openModal}
        />
      </div>
    );
  }
}

export default compose(
  withFirestore,
  connect(
    mapState,
    actions
  ),
  firebaseConnect(props => [`restaurant_chat/${props.match.params.id}`])
)(RestaurantDetailedPage);
