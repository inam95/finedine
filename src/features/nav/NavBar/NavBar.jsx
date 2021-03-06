import React, { Component } from "react";
import { Menu, Container } from "semantic-ui-react";
import { NavLink, Link, withRouter } from "react-router-dom";
import { connect } from "react-redux";
import { withFirebase } from "react-redux-firebase";
import SignedOutMenu from "./Menus/SignedOutMenu";
import SignedInMenu from "./Menus/SignedInMenu";
import { openModal } from "../../modals/modalActions";

import "./NavBar.css";

const actions = {
  openModal
};

const mapState = state => ({
  auth: state.firebase.auth,
  profile: state.firebase.profile
});

class NavBar extends Component {
  handleSignIn = () => {
    this.props.openModal("LoginModal");
  };

  handleRegister = () => {
    this.props.openModal("RegisterModal");
  };

  handleSignOut = () => {
    this.props.firebase.logout();
    this.props.history.push("/");
  };

  render() {
    const { auth, profile } = this.props;
    const authenticated = auth.isLoaded && !auth.isEmpty;

    return (
      <Menu inverted fixed="top">
        <Container>
          <Menu.Item as={Link} to="/" header>
            <img src="/assets/logo2.png" alt="logo" style={{ height: "3.5rem", width: "3.5rem" }} />
            <h2 className="brand">FineDine</h2>
          </Menu.Item>
          <Menu.Item as={NavLink} to="/restaurants" name="All Restaurants" />
          {/* <Menu.Item as={NavLink} to="/test" name="Test" /> */}
          {/* <Menu.Item>{authenticated && <Button floated="right" positive inverted content="Create Event" />}</Menu.Item> */}
          {/* <Menu.item>
            <Form size="large">
              <Segment>
                <Field name="email" component={TextInput} type="text" placeholder="Email Address" />
                <Field name="password" component={TextInput} type="password" placeholder="password" />
              </Segment>
            </Form>
          </Menu.item> */}
          {authenticated ? (
            <SignedInMenu profile={profile} auth={auth} signOut={this.handleSignOut} />
          ) : (
            <SignedOutMenu signIn={this.handleSignIn} register={this.handleRegister} />
          )}
        </Container>
      </Menu>
    );
  }
}

export default withRouter(
  withFirebase(
    connect(
      mapState,
      actions
    )(NavBar)
  )
);
