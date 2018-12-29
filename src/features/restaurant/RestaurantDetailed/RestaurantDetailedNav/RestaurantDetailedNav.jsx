import React from "react";
import { Link } from "react-router-dom";

import RestaurantDetailedDashboard from "./RestaurantDetailedDashboard";

import "../RestaurantDetailed.css";

const RestaurantDetailedNav = ({ restaurant, addReviews, restaurantChat, authenticated, openModal }) => {
  return (
    <div className="detail-navbar">
      <nav>
        <ul>
          <li>
            <Link to={`/restaurant/${restaurant.id}/overview`}>Overview</Link>
          </li>
          <li>
            <Link to={`/restaurant/${restaurant.id}/reviews`}>Reviews</Link>
          </li>
          <li>
            <Link to={`/restaurant/${restaurant.id}/menu`}>Menu</Link>
          </li>
        </ul>
      </nav>
      <RestaurantDetailedDashboard
        restaurant={restaurant}
        addReviews={addReviews}
        restaurantChat={restaurantChat}
        authenticated={authenticated}
        openModal={openModal}
      />
    </div>
  );
};

export default RestaurantDetailedNav;
