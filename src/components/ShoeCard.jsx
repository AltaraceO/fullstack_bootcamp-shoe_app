import React, { Component } from "react";
import Update from "./Update";

class ShoeCard extends Component {
  state = { visibilityUpdate: false, id: "" };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  render() {
    if (this.state.visibilityUpdate)
      return (
        <Update
          id={this.id}
          getFunc={this.props.getGet}
          visFunc={this.changeVis}
        />
      );
    return (
      <div key={this.props.cat.id}>
        {this.props.cat.first} <strong>the cat</strong>
        <br />
        {this.props.cat.last}
        <br />
        {this.props.cat.breed}
        <br />
        <button>Delete</button>
        <button onClick={this.changeVis}>Update</button>
      </div>
    );
  }
}
export default ShoeCard;

//child is the update

// create each cat instance card with call that cat card information

//create a card with a delete button that has a 'delete api' call taht will delete that specific cat and then call the getCat to update the state with out the deleted cat

//has an update componenet = needs an ID from the parent, the get function

//delet btn
//update componenet
