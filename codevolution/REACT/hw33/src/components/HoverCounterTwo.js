import React, { Component } from "react";

class HoverCounterTwo extends Component {
  render() {
    const { count, incrementCount } = this.props;
    return <div onMouseOver={incrementCount}>Hovered {count} times</div>;
  }
}

export default HoverCounterTwo;
