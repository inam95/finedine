import React from "react";
import { Button, Label, Icon } from "semantic-ui-react";

import "./RestaurantDetailed.css";

const RestaurantDetailedHeader = ({ restaurant }) => {
  return (
    <div className="detail-header">
      <div className="detail-image">
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
          <div className="images">
            <p>Photos</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailedHeader;
