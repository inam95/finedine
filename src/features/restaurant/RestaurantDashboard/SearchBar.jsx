import React, { Component } from "react";
import { connect } from "react-redux";
import { Form, Segment, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import PlaceInput from "../../../app/common/form/PlaceInput";
import { getRestaurantsForDashboard } from "../restaurantAction";

const actions = {
  getRestaurantsForDashboard
};

class SearchBar extends Component {
  state = {
    city: ""
  };

  onSubmit = e => {
    e.preventDefault();
    let val = this.refs.value;
    this.setState({
      city: val
    });
  };

  render() {
    return (
      <Form size="small">
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
