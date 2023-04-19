import React, { Component } from "react";

export class ClassCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  handleIncrease = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handleDecrease = () => {
    this.setState({ count: this.state.count - 1 });
  };
  render() {
    return (
      <div>
        <h1>Class Counter</h1>
        <h1 style={{ textAlign: "center" }}>: {this.state.count}</h1>
        <button onClick={this.handleIncrease}>Increase(+)</button>{" "}
        <button onClick={this.handleDecrease}>Decrease(-)</button>
      </div>
    );
  }
}

export default ClassCounter;
