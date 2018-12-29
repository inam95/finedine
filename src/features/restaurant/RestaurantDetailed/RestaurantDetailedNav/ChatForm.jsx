import React, { Component } from "react";
import { Form, Button } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextArea from "../../../../app/common/form/TextArea";

class ChatForm extends Component {
  handleReviewSubmit = values => {
    const { addReviews, reset, restaurantId, closeForm, parentId } = this.props;
    addReviews(restaurantId, values, parentId);
    reset();
    if (parentId !== 0) {
      closeForm();
    }
  };
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit(this.handleReviewSubmit)}>
        <Field name="review" rows={2} type="text" component={TextArea} />
        <Button content="Add Reply" labelPosition="left" icon="edit" primary />
      </Form>
    );
  }
}

export default reduxForm({ Fields: "review" })(ChatForm);
