import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Icon } from "semantic-ui-react";

import "./RestaurantList.css";
import { objectLength } from "../../../app/common/util/helpers";

class RestaurantListItem extends Component {
  render() {
    const { restaurant } = this.props;

    return (
      <div className="restaurant-list_item">
        <div className="restaurant-header">
          <div
            className="restaurant-image"
            style={{
              background: `url(${restaurant.photoURL || "/assets/bg.jpg"}) no-repeat`,
              backgroundPosition: "center",
              backgroundSize: "cover"
            }}
          />
          <div className="restaurant-info">
            <Link to={`/restaurant/${restaurant.id}`}>{restaurant.name}</Link>
            <h5>{restaurant.venue}</h5>
            <div className="restaurant-rate-block">
              <Icon name="thumbs up" size="large" style={{ color: "#07a355" }} />
              <p className="votes">{(restaurant && restaurant.likedBy && objectLength(restaurant.likedBy)) || 0} likes</p>
            </div>
          </div>
        </div>
        <hr />
        <div className="restaurant-footer">
          <div className="footer-row">
            <p className="label">Cuisines:</p>
            <p className="desc">{restaurant.cuisines.map(cuisine => cuisine + ", ")}</p>
          </div>
          <div className="footer-row">
            <p className="label">Description:</p>
            <p className="desc">{(restaurant && restaurant.description) || "-----"}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default RestaurantListItem;
