import React from "react";
import { Button } from "semantic-ui-react";

import "./RestaurantDetailed.css";

const RestaurantDetailedHeader = ({ restaurant }) => {
  return (
    <div className="detail-header">
      <div className="detail-image">
        <div className="restaurant_name">
          <h2>
            {restaurant.name} | {restaurant.address.city}
          </h2>
        </div>
        {/* <div className="restaurant-rate_block" /> */}
        <div className="action_block">
          <Button inverted content="Bookmark" icon="bookmark outline" />
          <Button
            inverted
            content="Like"
            icon="thumbs up outline"
            label={{
              basic: true,
              pointing: "left",
              content: "150"
            }}
          />
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
