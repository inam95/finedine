import React from "react";

import RestaurantDetailedHeader from "./RestaurantDetailedHeader";

import "./RestaurantDetailed.css";
import RestaurantDetailedFooter from "./RestaurantDetailedFooter";

const restaurant = {
  id: "1",
  name: "Dinemore",
  phone: "085 3535 699",
  address: {
    city: "Kandy, SL",
    street: "Dinemore, 15 George E De Silva Mawatha, Kandy"
  },
  tbr: true,
  avg_cost: 1000,
  likes: 150,
  cuisines: ["American", "Fast Food"],
  additionalInfo: ["Breakfast", "Brunch", "Private Dining Area Available"],
  description:
    "Grabbing brunch or just stopping by for a drink - 'Dinemore' brings out an exciting, and effervescent vibe to the dining experience."
};

const RestaurantDetailedPage = () => {
  return (
    <div className="detail-container">
      <RestaurantDetailedHeader restaurant={restaurant} />
      <RestaurantDetailedFooter restaurant={restaurant} />
    </div>
  );
};

export default RestaurantDetailedPage;
