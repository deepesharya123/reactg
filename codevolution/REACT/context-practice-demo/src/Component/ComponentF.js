import React, { Component } from "react";
import { UserContext, TopicContext } from "../App";

export class ComponentF extends Component {
  render() {
    return (
      <div>
        <UserContext.Consumer>
          {(user) => {
            return (
              <TopicContext.Consumer>
                {(topic) => {
                  return (
                    <div>
                      <h2>data from contex is</h2>
                      <h1>
                        userName- {user} and topciName- {topic}
                      </h1>
                    </div>
                  );
                }}
              </TopicContext.Consumer>
            );
          }}
        </UserContext.Consumer>
      </div>
    );
  }
}

export default ComponentF;
