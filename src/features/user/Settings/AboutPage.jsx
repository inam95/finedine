import React from "react";
import { Button, Divider, Form, Header, Segment } from "semantic-ui-react";
import { Field, reduxForm } from "redux-form";
import TextInput from "../../../app/common/form/TextInput";
import TextArea from "../../../app/common/form/TextArea";
import PlaceInput from "../../../app/common/form/PlaceInput";
import SelectInput from "../../../app/common/form/SelectInput";

const interests = [
  { key: "fastfood", text: "Fast Food", value: "fastfood" },
  { key: "indian", text: "Indian", value: "indian" },
  { key: "srilankan", text: "SriLankan", value: "srilankan" },
  { key: "chinese", text: "Chinense", value: "chinese" },
  { key: "cafe", text: "Cafe", value: "cafe" },
  { key: "seafood", text: "Sea Food", value: "seafood" }
];

const About = ({ pristine, submitting, handleSubmit, updateProfile }) => {
  return (
    <Segment>
      <Header dividing size="large" content="About Me" />
      <p>Complete your profile to get the most out of this site</p>
      <Form onSubmit={handleSubmit(updateProfile)}>
        <label>Tell us about yourself</label>
        <Field name="about" component={TextArea} placeholder="About Me" />
        <Field
          name="interests"
          component={SelectInput}
          options={interests}
          value="interests"
          multiple={true}
          placeholder="Select your interests"
        />
        <Field width={8} name="occupation" type="text" component={TextInput} placeholder="Occupation" />
        <Field
          width={8}
          name="origin"
          options={{ types: ["(regions)"] }}
          component={PlaceInput}
          placeholder="Country of Origin"
        />
        <Divider />
        <Button disabled={pristine || submitting} size="large" positive content="Update Profile" />
      </Form>
    </Segment>
  );
};

export default reduxForm({ form: "userProfile", enableReinitialize: true, destroyOnUnmount: false })(About);
