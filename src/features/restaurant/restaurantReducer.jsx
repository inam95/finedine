import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_RESTAURANT, FETCH_RESTAURANTS } from "./restaurantConstants";

const initialState = [];

export const createRestaurant = (state, payload) => {
  return [...state, Object.assign({}, payload.restaurant)];
};

export const fetchRestaurants = (state, payload) => {
  return payload.restaurants;
};

export default createReducer(initialState, {
  [CREATE_RESTAURANT]: createRestaurant,
  [FETCH_RESTAURANTS]: fetchRestaurants
});
