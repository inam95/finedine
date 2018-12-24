import React, { Component } from "react";

import "./RestaurantList.css";

class RestaurantListItem extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div className="restaurant-list_item">
        <div className="restaurant-header">
          <div className="restaurant-image" />
          <div className="restaurant-info">
            <a href="">{restaurant.name}</a>
            <h5>{restaurant.address.street}</h5>
            <div className="restaurant-rate-block">
              <p className="rate">{restaurant.rate}</p>
              <p className="votes"> / {restaurant.votes} votes</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="restaurant-footer">
          <div>
            <div className="footer-row">
              <p className="label">Cuisines:</p>
              <p className="desc">
                {restaurant.cuisines.map(cuisine => cuisine + ", ")}
              </p>
            </div>
            <div className="footer-row">
              <p className="label">Description:</p>
              <p className="desc">{restaurant.description}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantListItem;
