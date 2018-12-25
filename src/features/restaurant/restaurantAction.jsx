import { CREATE_RESTAURANT } from "./restaurantConstants";

export const createRestaurant = restaurant => {
  return {
    type: CREATE_RESTAURANT,
    payload: {
      restaurant
    }
  };
};
