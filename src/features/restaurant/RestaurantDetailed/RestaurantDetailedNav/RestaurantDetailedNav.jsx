import React from "react";

import RestaurantDetailedDashboard from "./RestaurantDetailedDashboard";

import "../RestaurantDetailed.css";

const RestaurantDetailedNav = ({ restaurant }) => {
  return (
    <div className="detail-navbar">
      <nav>
        <ul>
          <li>
            <a href="">Overview</a>
          </li>
          <li>
            <a href="">Reviews</a>
          </li>
          <li>
            <a href="">Menu</a>
          </li>
        </ul>
      </nav>
      <RestaurantDetailedDashboard restaurant={restaurant} />
    </div>
  );
};

export default RestaurantDetailedNav;
