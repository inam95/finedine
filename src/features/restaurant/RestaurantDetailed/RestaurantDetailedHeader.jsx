import React from "react";
import { Button, Label, Icon } from "semantic-ui-react";

import "./RestaurantDetailed.css";

const RestaurantDetailedHeader = ({ restaurant }) => {
  return (
    <div className="detail-header">
      <div
        className="detail-image"
        style={{
          backgroundImage: `linear-gradient(0deg, rgba(26, 26, 26, 0.5) 15%, rgba(49, 49, 49, 0.6) 15%, rgba(92, 92, 92, 0.6) 15%), url(${
            restaurant.photoURL
          })`
        }}
      >
        <div className="restaurant_name">
          <h2>
            {restaurant.name} | {restaurant.city}
          </h2>
        </div>
        {/* <div className="restaurant-rate_block" /> */}
        <div className="action_block">
          <Button inverted content="Bookmark" icon="bookmark outline" />
          <Button as="div" labelPosition="right">
            <Button icon inverted>
              <Icon name="thumbs up outline" />
              Like
            </Button>
            <Label as="a" basic pointing="left">
              {restaurant.likes}
            </Label>
          </Button>
        </div>
        <div className="photos_block">
          <div
            className="images"
            style={{
              backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.336), rgba(0, 0, 0, 0.336)), url(${restaurant.photoURL})`
            }}
          >
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailedHeader;
