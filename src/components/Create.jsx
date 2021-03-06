//parent is each shoe componenet
//import getCat funciton to be called after each put

import React, { Component } from "react";
import api from "./api";

class Create extends Component {
  state = { first: "", last: "", breed: "", id: "" };

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  onClickHandle = async () => {
    const originalState = { first: "", last: "", breed: "", id: "" };
    const newObj = this.state;
    await api.post("", newObj);
    this.props.funcGetCats();
    this.setState(originalState);
  };

  render() {
    return (
      <div>
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
        <button onClick={this.onClickHandle}>Add new cat</button>
      </div>
    );
  }
}
export default Create;
