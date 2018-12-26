import { createReducer } from "../../app/common/util/reducerUtil";
import { CREATE_RESTAURANT } from "./restaurantConstants";

const initialState = [];

export const createRestaurant = (state, payload) => {
  return [...state, Object.assign({}, payload.restaurant)];
};

export default createReducer(initialState, {
  [CREATE_RESTAURANT]: createRestaurant
});
