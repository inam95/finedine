import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import PlaceInput from "../../../app/common/form/PlaceInput";
import { getRestaurantsByCity } from "../restaurantAction";

const actions = {
  getRestaurantsByCity
};

class SearchBar extends Component {
  onSubmit = values => {
    const { getRestaurantsByCity, reset } = this.props;
    console.log(values.city);
    getRestaurantsByCity(values.city);
    reset();
  };

  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.onSubmit)}>
        <Segment style={{ display: "flex" }}>
          <Field
            ref="city"
            name="city"
            component={PlaceInput}
            type="text"
            placeholder="Enter City"
            width={12}
            options={{ types: ["(cities)"] }}
          />
          <Button
            floated="right"
            style={{ padding: "0 auto", width: "15rem", height: "3rem", background: "#10078b", color: "#fff" }}
          >
            Search
          </Button>
        </Segment>
      </Form>
    );
  }
}

export default connect(
  null,
  actions
)(reduxForm({ form: "seachForm" })(SearchBar));
