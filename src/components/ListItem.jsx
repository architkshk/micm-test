import React, { Component } from "react";

import PopUp from "./PopUp";

class ListItem extends Component {
  state = {
    popup: false,
    position: {
      left: 0,
      top: 0,
      width: 0
    }
  };

  togglePopup = e => {
    let { left, top, width } = e.target.getBoundingClientRect();
    this.setState(previousState => ({
      popup: !previousState.popup,
      position: {
        left,
        top,
        width
      }
    }));
  };

  render() {
    let { name, username, address } = this.props;
    return (
      <div className="user-list-item">
        <div
          className="name"
          onMouseOver={this.togglePopup}
          onMouseOut={this.togglePopup}
        >
          {name}
        </div>
        <div className="username">({username})</div>
        {this.state.popup && (
          <PopUp address={address} position={this.state.position} />
        )}
      </div>
    );
  }
}

export default ListItem;
