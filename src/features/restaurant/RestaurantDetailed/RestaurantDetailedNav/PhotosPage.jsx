import React, { Component } from "react";
import { Grid, Header, Image, Segment } from "semantic-ui-react";
import { firestoreConnect } from "react-redux-firebase";
import { compose } from "redux";
import { connect } from "react-redux";

// const query = ({ restaurant }) => {
//   return {
//     collection: "restaurants",
//     doc: restaurant.id,
//     subcollections: [{ collection: "photos" }],
//     storeAs: "photos"
//   };
// };

const mapState = state => {
  let restaurant = {};

  if (state.firestore.ordered.restaurants && state.firestore.ordered.restaurants[0]) {
    restaurant = state.firestore.ordered.restaurants[0];
  }

  return {
    restaurant
  };
};

class PhotosPage extends Component {
  render() {
    return (
      <Grid.Column width={16}>
        <Segment attached>
          <Header icon="image" content="Photos" />
          <h1>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quaerat modi, omnis amet, illum praesentium hic
            blanditiis at atque, corrupti quas eos neque maiores voluptas consectetur saepe commodi deleniti non enim
            incidunt nihil placeat pariatur in. Accusamus tempora quibusdam ex doloribus quis aut? Voluptates, distinctio?
            Facilis mollitia quasi magnam? Modi, sunt.
          </h1>
          <Image.Group />
        </Segment>
      </Grid.Column>
    );
  }
}

export default compose(
  connect(mapState),
  firestoreConnect()
)(PhotosPage);
