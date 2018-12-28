import React, { Component } from "react";
import RestaurantListItem from "./RestaurantListItem";
import InfiniteScroll from "react-infinite-scroller";

import "./RestaurantList.css";

class RestaurantList extends Component {
  render() {
    const { restaurants, getNextRestaurants, loading, moreRestaurants } = this.props;

    return (
      <div className="restaurant-list">
        {restaurants && restaurants.length !== 0 && (
          <InfiniteScroll pageStart={0} loadMore={getNextRestaurants} hasMore={!loading && moreRestaurants}>
            {restaurants &&
              restaurants.map(restaurant => <RestaurantListItem key={restaurant.id} restaurant={restaurant} />)}
          </InfiniteScroll>
        )}
      </div>
    );
  }
}

export default RestaurantList;
