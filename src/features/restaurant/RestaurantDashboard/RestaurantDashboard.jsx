import React, { Component } from "react";
import { connect } from "react-redux";
import { firestoreConnect } from "react-redux-firebase";

import RestaurantList from "../RestaurantList/RestaurantList";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { getRestaurantsForDashboard } from "../restaurantAction";
import SearchBar from "./SearchBar";
import { Loader, Grid } from "semantic-ui-react";

const mapState = state => ({
  restaurants: state.restaurants,
  loading: state.async.loading
});

const actions = {
  getRestaurantsForDashboard
};

class RestaurantDashboard extends Component {
  state = {
    moreRestaurants: false,
    loadingInitial: true,
    loadedRestaurants: []
  };

  componentWillReceiveProps(nextProps) {
    if (this.props.restaurants !== nextProps.restaurants) {
      this.setState({
        loadedRestaurants: [...this.state.loadedRestaurants, ...nextProps.restaurants]
      });
    }
  }

  async componentDidMount() {
    let next = await this.props.getRestaurantsForDashboard();
    // console.log(next);

    if (next && next.docs && next.docs.length > 1) {
      this.setState({
        moreRestaurants: true,
        loadingInitial: false
      });
    }
  }

  getNextRestaurants = async () => {
    const { restaurants } = this.props;
    let lastRestaurant = restaurants && restaurants[restaurants.length - 1];
    // console.log(lastRestaurant);
    let next = await this.props.getRestaurantsForDashboard(lastRestaurant);
    // console.log(next);

    if (next && next.docs && next.docs.length <= 1) {
      this.setState({
        moreRestaurants: false
      });
    }
  };

  render() {
    const { loading } = this.props;
    const { moreRestaurants, loadedRestaurants } = this.state;
    if (this.state.loadingInitial) return <LoadingComponent inverted />;
    return (
      <Grid>
        <Grid.Column width={16}>
          <SearchBar />
        </Grid.Column>
        <Grid.Column width={16}>
          <RestaurantList
            loading={loading}
            moreRestaurants={moreRestaurants}
            restaurants={loadedRestaurants}
            getNextRestaurants={this.getNextRestaurants}
          />
        </Grid.Column>
        <Grid.Column width={16}>
          <Loader active={loading} />
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(
  mapState,
  actions
)(firestoreConnect([{ collection: "restaurants" }])(RestaurantDashboard));
