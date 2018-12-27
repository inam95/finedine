import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedDescription from "./UserDetailedDescription";
import UserDetailedSidebar from "./UserDetailedSidebar";

const mapState = state => ({
  profile: state.firebase.profile,
  auth: state.firestore.ordered.auth
});

class UserDetailedPage extends Component {
  render() {
    const { profile } = this.props;

    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedDescription profile={profile} />
        <UserDetailedSidebar />
      </Grid>
    );
  }
}

export default connect(mapState)(UserDetailedPage);
