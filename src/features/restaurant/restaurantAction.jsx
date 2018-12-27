import { FETCH_RESTAURANTS } from "./restaurantConstants";
import { asyncActionError, asyncActionStart, asyncActionFinish } from "../async/asyncAction";
import { fetchSampleData } from "../../app/data/mokApi";

export const fetchRestaurants = restaurant => {
  return {
    type: FETCH_RESTAURANTS,
    payload: restaurant
  };
};

export const loadRestaurants = () => {
  return async dispatch => {
    try {
      dispatch(asyncActionStart());
      let restaurants = await fetchSampleData();
      dispatch(fetchRestaurants(restaurants));
      dispatch(asyncActionFinish());
    } catch (error) {
      console.log(error);
      dispatch(asyncActionError);
    }
  };
};
