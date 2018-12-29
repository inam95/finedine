import { FETCH_RESTAURANTS } from "./restaurantConstants";
import { asyncActionError, asyncActionStart, asyncActionFinish } from "../async/asyncAction";
import firebase from "../../app/config/firebase";
import { toastr } from "react-redux-toastr";

// export const fetchRestaurants = restaurant => {
//   return {
//     type: FETCH_RESTAURANTS,
//     payload: restaurant
//   };
// };

// export const loadRestaurants = () => {
//   return async dispatch => {
//     try {
//       dispatch(asyncActionStart());
//       let restaurants = await fetchSampleData();
//       //dispatch(fetchRestaurants(restaurants));
//       dispatch(asyncActionFinish());
//     } catch (error) {
//       console.log(error);
//       dispatch(asyncActionError);
//     }
//   };
// };

export const getRestaurantsForDashboard = lastRestaurant => async (dispatch, getState) => {
  const firestore = firebase.firestore();
  const restaurantsRef = firestore.collection("restaurants");

  try {
    dispatch(asyncActionStart());
    let startAfter =
      lastRestaurant &&
      (await firestore
        .collection("restaurants")
        .doc(lastRestaurant.id)
        .get());
    let query;

    lastRestaurant
      ? (query = restaurantsRef
          // .orderBy("city")
          .startAfter(startAfter)
          .limit(3))
      : (query = query = restaurantsRef
          // .orderBy("city")
          .limit(3));

    let querySnap = await query.get();

    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }

    let restaurants = [];

    for (let i = 0; i < querySnap.docs.length; i++) {
      let restaurant = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      restaurants.push(restaurant);
    }

    dispatch({ type: FETCH_RESTAURANTS, payload: { restaurants } });
    dispatch(asyncActionFinish());
    return querySnap;
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const getRestaurantsByCity = city => async (dispatch, getState) => {
  const firestore = firebase.firestore();
  const restaurantsRef = firestore.collection("restaurants");
  const restaurantQuery = restaurantsRef.where("city", "==", city);
  // console.log(restaurantQuery);
  try {
    dispatch(asyncActionStart());
    let querySnap = await restaurantQuery.get();
    if (querySnap.docs.length === 0) {
      dispatch(asyncActionFinish());
      return querySnap;
    }
    let restaurants = [];
    for (let i = 0; i < querySnap.docs.length; i++) {
      let restaurant = { ...querySnap.docs[i].data(), id: querySnap.docs[i].id };
      restaurants.push(restaurant);
    }
    dispatch({ type: FETCH_RESTAURANTS, payload: { restaurants } });
    dispatch(asyncActionFinish());
  } catch (error) {
    console.log(error);
    dispatch(asyncActionError());
  }
};

export const addReviews = (restaurantId, values, parentId) => async (dispatch, getState, { getFirebase }) => {
  const firebase = getFirebase();
  const profile = getState().firebase.profile;
  const user = firebase.auth().currentUser;
  let newReview = {
    parentId: parentId,
    displayName: profile.displayName,
    photoURL: profile.photoURL || "/assets/user.png",
    uid: user.uid,
    text: values.review,
    date: Date.now()
  };
  try {
    await firebase.push(`restaurant_chat/${restaurantId}`, newReview);
  } catch (error) {
    console.log(error);
    toastr.error("Oops", "Problem adding Review");
  }
};
