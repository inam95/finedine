import React from "react";

import RestaurantDetailedNav from "./RestaurantDetailedNav/RestaurantDetailedNav";

import "./RestaurantDetailed.css";

const RestaurantDetailedFooter = ({ restaurant }) => {
  return (
    <div className="detail-footer">
      <div className="detail_info">
        <RestaurantDetailedNav restaurant={restaurant} />
        <div className="map" />
      </div>
    </div>
  );
};

export default RestaurantDetailedFooter;
