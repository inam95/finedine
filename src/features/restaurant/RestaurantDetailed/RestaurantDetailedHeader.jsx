import React from "react";
import { Button, Label, Icon } from "semantic-ui-react";
import { Link } from "react-router-dom";

import "./RestaurantDetailed.css";
import { objectLength } from "../../../app/common/util/helpers";

const RestaurantDetailedHeader = ({ restaurant, isLike, likePlace, isBookmarked, bookMarkPlace }) => {
  return (
    <div className="detail-header">
      <div
        className="detail-image"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(26, 26, 26, 0.5) 15%, rgba(49, 49, 49, 0.6) 15%, rgba(92, 92, 92, 0.6) 15%), url(${restaurant.photoURL ||
            "/assets/bg.jpg"})`
        }}
      >
        <div className="restaurant_name">
          <h2>
            {restaurant.name} | {restaurant.city}
          </h2>
        </div>
        {/* <div className="restaurant-rate_block" /> */}
        <div className="action_block">
          <Button
            onClick={() => bookMarkPlace(restaurant)}
            disabled={isBookmarked}
            inverted
            content="Bookmark"
            icon="bookmark outline"
          />
          <Button disabled={isLike} as="div" labelPosition="right">
            <Button onClick={() => likePlace(restaurant)} icon inverted>
              <Icon name="thumbs up outline" />
              Like
            </Button>
            <Label basic pointing="left">
              {restaurant && restaurant.likedBy && objectLength(restaurant.likedBy)}
            </Label>
          </Button>
        </div>
        <Link className="photos_block" to={`/restaurant/${restaurant.id}/photos`}>
          <div
            className="images"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.336)), url(${restaurant.photoURL ||
                "/assets/bg.jpg"})`
            }}
          >
            <p>Photos</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantDetailedHeader;
