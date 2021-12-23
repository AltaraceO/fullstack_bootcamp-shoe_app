//parent is each shoe componenet
//import getCat funciton to be called after each put

import React, { Component } from "react";
import api from "../api";

class Update extends Component {
  state = { first: "", last: "", breed: "" };

  onClickHandle = async () => {
    this.props.visFunc();

    await api.put(id, this.state);
  };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    // e.target.name;
    // console.log(e.target.value);
  };

  render() {
    console.log(this.state);
    return (
      <div className="update-window">
        <input
          onChange={this.handleOnChange}
          type="text"
          name="first"
          placeholder="New name"
          value={this.state.first}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="last"
          placeholder="New last name"
          value={this.state.last}
        />
        <br />
        <input
          onChange={this.handleOnChange}
          type="text"
          name="breed"
          placeholder="New breed"
          value={this.state.breed}
        />
        <br />
        <button onClick={this.onClickHandle}>Update</button>
      </div>
    );
  }
}
export default Update;
