import React from "react";

import RestaurantDetailedNav from "./RestaurantDetailedNav/RestaurantDetailedNav";

import "./RestaurantDetailed.css";
import RestaurantDetailedMap from "./RestaurantDetailedMap";

const RestaurantDetailedFooter = ({ restaurant }) => {
  return (
    <div className="detail-footer">
      <div className="detail_info">
        <RestaurantDetailedNav restaurant={restaurant} />
        <div className="map">
          <RestaurantDetailedMap lat={7} lng={8} />
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailedFooter;
