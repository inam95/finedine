import React, { Component } from "react";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";

import NavBar from "../../features/nav/NavBar/NavBar";
import Home from "../../features/home/Home";
import RestaurantDashboard from "../../features/restaurant/RestaurantDashboard/RestaurantDashboard";
import RestaurantDetailedPage from "../../features/restaurant/RestaurantDetailed/RestaurantDetailedPage";
import UserDetailedPage from "../../features/user/UserDetailedPage/UserDetailedPage";
import SettingsDashboard from "../../features/user/Settings/SettingsDashboard";
import TestComponent from "../../features/testarea/TestComponent";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
        </Switch>

        <Route
          path="/(.+)"
          render={() => (
            <div>
              <NavBar />
              <Container className="main">
                <Switch>
                  <Route path="/restaurants" component={RestaurantDashboard} />
                  <Route path="/test" component={TestComponent} />
                  <Route
                    path="/restaurant/:id"
                    component={RestaurantDetailedPage}
                  />
                  <Route path="/profile" component={UserDetailedPage} />
                  <Route path="/settings" component={SettingsDashboard} />
                </Switch>
              </Container>
            </div>
          )}
        />
      </div>
    );
  }
}

export default App;
