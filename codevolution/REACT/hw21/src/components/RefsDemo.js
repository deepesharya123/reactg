import React, { Component } from "react";

class RefsDemo extends Component {
  constructor(props) {
    super(props);

    this.inputref = React.createRef();
    this.cbRef = null;
    this.setcbRef = (val) => (this.cbRef = val);
  }

  componentDidMount() {
    if (this.cbRef) {
      this.cbRef.focus();
    }

    // this.inputref.current.focus();

    // console.log(this.inputref);
  }
  clickHandler = () => {
    alert(this.inputref.current.value);
  };
  render() {
    return (
      <div>
        <input type="text" ref={this.inputref} />
        {/* <input type="text" ref={this.setcbRef} /> */}
        <button onClick={this.clickHandler}>Click</button>
      </div>
    );
  }
}

export default RefsDemo;
