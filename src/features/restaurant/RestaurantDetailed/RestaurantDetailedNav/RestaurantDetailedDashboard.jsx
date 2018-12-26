import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Overview from "./Overview";
import Reviews from "./Reviews";
import Menu from "./Menu";

import "../RestaurantDetailed.css";

const RestaurantDetailedDashboard = ({ restaurant }) => {
  return (
    <Switch>
      <Redirect exact from={`/restaurant/${restaurant.id}`} to={`/restaurant/${restaurant.id}/overview`} />
      <Route path={`/restaurant/${restaurant.id}/overview`} render={() => <Overview restaurant={restaurant} />} />

      <Route path={`/restaurant/${restaurant.id}/reviews`} component={Reviews} />

      <Route path={`/restaurant/${restaurant.id}/menu`} component={Menu} />
    </Switch>
  );
};

export default RestaurantDetailedDashboard;
