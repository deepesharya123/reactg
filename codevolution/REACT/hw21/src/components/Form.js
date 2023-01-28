import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      comment: "",
      topic: "react",
    };
  }

  handleUsernameChange = (event) => {
    this.setState(
      (prevState) => {
        return { username: event.target.value };
      },
      () => {}
    );
  };

  handleCommentChange = (event) => {
    this.setState((prevState) => {
      return { comment: event.target.value };
    });
  };

  handleTopicChange = (event) => {
    this.setState((prevState) => {
      return { topic: event.target.value };
    });
  };

  handleSubmit = (event) => {
    alert(`${this.state.username} ${this.state.comment} ${this.state.topic}`);
    event.preventDefault();
  };

  render() {
    const { username, comment, topic } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username</label>
          <input
            type="text"
            value={username}
            onChange={this.handleUsernameChange}
          ></input>
        </div>

        <div>
          <label>Comment</label>
          <textarea value={comment} onChange={this.handleCommentChange} />
        </div>

        <div>
          <label>Topic</label>
          <select value={topic} onChange={this.handleTopicChange}>
            <option type="react">React</option>
            <option type="angular">Angular</option>
            <option type="vue">Vue</option>
          </select>
        </div>
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default Form;
