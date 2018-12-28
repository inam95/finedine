import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid } from "semantic-ui-react";
import UserDetailedHeader from "./UserDetailedHeader";
import UserDetailedDescription from "./UserDetailedDescription";
import UserDetailedSidebar from "./UserDetailedSidebar";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { getUserLikes } from "../userActions";

const mapState = (state, ownProps) => ({
  userUid: ownProps.match.params.id,
  profile: state.firebase.profile,
  auth: state.firestore.ordered.auth,
  requesting: state.firestore.status.requesting
});

const actions = {
  getUserLikes
};

class UserDetailedPage extends Component {
  render() {
    const { profile, requesting } = this.props;
    const loading = Object.values(requesting).some(a => a === true);
    if (loading) return <LoadingComponent inverted={true} />;
    return (
      <Grid>
        <UserDetailedHeader profile={profile} />
        <UserDetailedDescription profile={profile} />
        <UserDetailedSidebar />
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(UserDetailedPage);
