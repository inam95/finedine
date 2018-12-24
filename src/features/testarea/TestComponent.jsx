import React, { Component } from "react";
import { connect } from "react-redux";

const mapState = state => ({
  data: state.test.data
});

class TestComponent extends Component {
  render() {
    const { data } = this.props;
    return (
      <div>
        <h1>data={data}</h1>
      </div>
    );
  }
}

export default connect(mapState)(TestComponent);
