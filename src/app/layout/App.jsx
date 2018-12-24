import React, { Component } from "react";
import { Container } from "semantic-ui-react";

import RestaurantDashboard from "../../features/restaurant/RestaurantDashboard/RestaurantDashboard";
import NavBar from "../../features/nav/NavBar/NavBar";

class App extends Component {
  render() {
    return (
      <div>
        <NavBar />
        <Container className="main">
          <RestaurantDashboard />
        </Container>
      </div>
    );
  }
}

export default App;
