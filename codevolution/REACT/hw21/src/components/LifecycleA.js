import React, { Component } from "react";
import LifecycleB from "./LifecycleB";
class LifecycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Deepesh",
    };

    console.log("LifeCycleA constructor");
  }

  changeState = () => {
    this.setState((prevState) => {
      return { name: "Money" };
    });
  };

  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycleA getDErivedStateFromProps ");
    return null;
  }

  componentDidMount() {
    console.log("LifeCycleA componentDidMount");
  }

  shouldComponentUpdate() {
    console.log("LifeCycleA shouldComponent");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("LifecycleA getSnapshotBeforeUpdate");
    return null;
  }

  componentDidUpdate() {
    console.log("LifecycleA componentDidUpdate");
  }

  render() {
    console.log("LifeCycleA  render");
    return (
      <div>
        LifeCycleA
        <button onClick={this.changeState}>Change State</button>
        <LifecycleB />
      </div>
    );
  }
}

export default LifecycleA;
