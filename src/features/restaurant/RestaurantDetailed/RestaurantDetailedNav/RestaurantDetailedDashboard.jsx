import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";

import Overview from "./Overview";

import "../RestaurantDetailed.css";

const RestaurantDetailedDashboard = ({ restaurant }) => {
  return <Overview restaurant={restaurant} />;
};

export default RestaurantDetailedDashboard;
