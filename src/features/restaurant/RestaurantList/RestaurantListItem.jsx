import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./RestaurantList.css";

class RestaurantListItem extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div className="restaurant-list_item">
        <div className="restaurant-header">
          <div
            className="restaurant-image"
            style={{
              background: `url(${restaurant.photoURL}) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
          <div className="restaurant-info">
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
            <h5>{restaurant.venue}</h5>
            <div className="restaurant-rate-block">
              <Icon name="thumbs up" size="large" style={{ color: "#07a355" }} />
              <p className="votes">{restaurant.likes} likes</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="restaurant-footer">
          <div>
            <div className="footer-row">
              <p className="label">Cuisines:</p>
              <p className="desc">{restaurant.cuisines.map(cuisine => cuisine + ", ")}</p>
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
