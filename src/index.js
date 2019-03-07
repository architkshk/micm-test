import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";

import List from "./components/List";

class App extends Component {
  constructor() {
    super();
    this.state = {
      users: null
    };
  }

  async componentDidMount() {
    try {
      let response = await fetch(`https://jsonplaceholder.typicode.com/users`);
      let users = await response.json();
      if (users) {
        this.setState({ users });
      }
    } catch (error) {
      this.setState({ users: null });
    }
  }

  render() {
    return (
      <div>
        <h1>Users {this.state.users ? null : "(loading)"} </h1>
        <List items={this.state.users} />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
