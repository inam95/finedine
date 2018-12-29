import React from "react";

import RestaurantDetailedNav from "./RestaurantDetailedNav/RestaurantDetailedNav";

import "./RestaurantDetailed.css";
import RestaurantDetailedMap from "./RestaurantDetailedMap";

const RestaurantDetailedFooter = ({ restaurant, addReviews, restaurantChat }) => {
  return (
    <div className="detail-footer">
      <div className="detail_info">
        <RestaurantDetailedNav restaurant={restaurant} addReviews={addReviews} restaurantChat={restaurantChat} />
        <div className="map">
          {restaurant.placeLatLng && (
            <RestaurantDetailedMap lat={restaurant.placeLatLng.lat} lng={restaurant.placeLatLng.lng} />
          )}
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailedFooter;
