import React, { Component } from "react";
import { connect } from "react-redux";
import { Image, Segment, Header, Divider, Grid, Button, Card, Icon } from "semantic-ui-react";
import Dropzone from "react-dropzone";
import Cropper from "react-cropper";
import "cropperjs/dist/cropper.css";
import { uploadRestaurantImages } from "./TestAction";
import { toastr } from "react-redux-toastr";

const mapState = (state, ownProps) => {
  let restaurant = {};

  if (state.firestore.ordered.restaurants && state.firestore.ordered.restaurants[0]) {
    restaurant = state.firestore.ordered.restaurants[0];
  }

  return {
    initialValues: restaurant,
    restaurant,
    loading: state.async.loading
  };
};

const actions = {
  uploadRestaurantImages
};

class TestComponent extends Component {
  state = {
    files: [],
    fileName: "",
    cropResult: null,
    image: {}
  };

  onDrop = files => {
    this.setState({
      files,
      fileName: files[0].name
    });
  };

  cropImage = () => {
    if (typeof this.refs.cropper.getCroppedCanvas() === "undefined") {
      return;
    }

    this.refs.cropper.getCroppedCanvas().toBlob(blob => {
      let imageUrl = URL.createObjectURL(blob);
      this.setState({
        cropResult: imageUrl,
        image: blob
      });
    }, "image/jpeg");
  };

  uploadImage = async () => {
    try {
      await this.props.uploadRestaurantImages(this.state.image, this.state.fileName, this.props.restaurant.id);
      this.cancelCrop();
      toastr.success("Success", "Photo has been uploaded");
    } catch (error) {
      toastr.error("Oops", error.message);
    }
  };

  cancelCrop = () => {
    this.setState({
      files: [],
      image: {}
    });
  };

  render() {
    const { loading } = this.props;

    return (
      <Segment>
        <Header dividing size="large" content="Your Photos" />
        <Grid>
          <Grid.Row />
          <Grid.Column width={4}>
            <Header color="teal" sub content="Step 1 - Add Photo" />
            <Dropzone onDrop={this.onDrop} multiple={false}>
              <div style={{ paddingTop: "30px", textAlign: "center" }}>
                <Icon name="upload" size="huge" />
                <Header content="Drop image here or click to upload" />
              </div>
            </Dropzone>
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 2 - Resize image" />
            {this.state.files[0] && (
              <Cropper
                style={{ height: 200, width: "100%" }}
                ref="cropper"
                src={this.state.files[0].preview}
                aspectRatio={1}
                viewMode={0}
                dragMode="move"
                guides={false}
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                crop={this.cropImage}
              />
            )}
          </Grid.Column>
          <Grid.Column width={1} />
          <Grid.Column width={4}>
            <Header sub color="teal" content="Step 3 - Preview and Upload" />
            {this.state.files[0] && (
              <div>
                <Image style={{ minHeight: "200px", minWidth: "200px" }} src={this.state.cropResult} />
                <Button.Group>
                  <Button loading={loading} onClick={this.uploadImage} style={{ width: "100px" }} positive icon="check" />
                  <Button disabled={loading} onClick={this.cancelCrop} style={{ width: "100px" }} icon="close" />
                </Button.Group>
              </div>
            )}
          </Grid.Column>
        </Grid>

        <Divider />
        <Header sub color="teal" content="All Photos" />

        <Card.Group itemsPerRow={5}>
          <Card>
            <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
            <Button positive>Main Photo</Button>
          </Card>

          <Card>
            <Image src="https://randomuser.me/api/portraits/men/20.jpg" />
            <div className="ui two buttons">
              <Button basic color="green">
                Main
              </Button>
              <Button basic icon="trash" color="red" />
            </div>
          </Card>
        </Card.Group>
      </Segment>
    );
  }
}

export default connect(
  mapState,
  actions
)(TestComponent);
