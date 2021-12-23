//parent is each shoe componenet
//import getCat funciton to be called after each put

import React, { Component } from "react";

class Update extends Component {
  state = { first: "", last: "", breed: "" };
  //props = getCat function + id
  onClickHandle = () => {
    this.props.visFunc();
  };

  // updateApi=async()={
  //     await axios.put -> like
  //     after await getCat
  // }
  render() {
    return (
      <div>
        <input type="text" name="first" />
        <input type="text" name="last" />
        <input type="text" name="breed" />
        <button onClick={this.onClickHandle}></button>
      </div>
    );
  }
}
export default Update;
