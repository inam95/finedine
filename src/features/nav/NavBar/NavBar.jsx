import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";

import "./NavBar.css";

class NavBar extends Component {
  render() {
    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item header>
            <img
              src="assets/logo2.png"
              alt="logo"
              style={{ height: "3.5rem", width: "3.5rem" }}
            />
            <h2 className="brand">FineDine</h2>
          </Menu.Item>
          <Menu.Item name="Events" />
          <Menu.Item>
            <Button floated="right" positive inverted content="Create Event" />
          </Menu.Item>
          <Menu.Item position="right">
            <Button basic inverted content="Login" />
            <Button
              basic
              inverted
              content="Sign Out"
              style={{ marginLeft: "0.5em" }}
            />
          </Menu.Item>
        </Container>
      </Menu>
    );
  }
}

export default NavBar;
