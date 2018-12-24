import React, { Component } from "react";
import { Menu, Container, Button } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";

import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";

import "./NavBar.css";

class NavBar extends Component {
  state = {
    authenticate: false
  };

  handleSignIn = () => {
    this.setState({
      authenticate: true
    });
  };

  handleSignOut = () => {
    this.setState({
      authenticate: false
    });
    this.props.history.push("/");
  };

  render() {
    const { authenticate } = this.state;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img
              src="/assets/logo2.png"
              alt="logo"
              style={{ height: "3.5rem", width: "3.5rem" }}
            />
            <h2 className="brand">FineDine</h2>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/restaurants" name="Events" />
          <Menu.Item>
            {authenticate && (
              <Button
                floated="right"
                positive
                inverted
                content="Create Event"
              />
            )}
          </Menu.Item>
          {authenticate ? (
            <SignedInMenu signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(NavBar);
