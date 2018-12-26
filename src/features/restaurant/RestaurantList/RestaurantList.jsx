import React, { Component } from "react";
import RestaurantListItem from "./RestaurantListItem";

import "./RestaurantList.css";

class RestaurantList extends Component {
  render() {
    const { restaurants } = this.props;

    return (
      <div className="restaurant-list">
        {restaurants &&
          restaurants.map(restaurant => (
            <RestaurantListItem key={restaurant.id} restaurant={restaurant} />
          ))}
      </div>
    );
  }
}

export default RestaurantList;
