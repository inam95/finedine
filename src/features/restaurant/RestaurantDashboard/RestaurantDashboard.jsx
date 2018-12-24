import React, { Component } from "react";
import RestaurantList from "../RestaurantList/RestaurantList";

const restaurantDashboard = [
  {
    id: "1",
    name: "Dinemore",
    address: {
      city: "Kandy, SL",
      street: "Dinemore, 15 George E De Silva Mawatha, Kandy"
    },
    rate: 4.2,
    votes: 147,
    cuisines: ["American", "Fast Food"],
    description:
      "Grabbing brunch or just stopping by for a drink - 'Dinemore' brings out an exciting, and effervescent vibe to the dining experience."
  },
  {
    id: "2",
    name: "Open Rice",
    address: {
      city: "Kandy, SL",
      street: "Open Rice Sri Lanka, 701/A, Peradeniye Road, 20000"
    },
    rate: 3.7,
    votes: 100,
    cuisines: ["Chinese", "Indian"],
    description:
      "Centrally located OpenRice is a Restaurant with specialty in multi delicious Cuisine created with the ingenuity and passion inspired by the fantastic flavors. Our variety menu includes Chinese, Indian, continental and western foods."
  }
];

class RestaurantDashboard extends Component {
  render() {
    return (
      <div className="container">
        <RestaurantList restaurants={restaurantDashboard} />
      </div>
    );
  }
}

export default RestaurantDashboard;
