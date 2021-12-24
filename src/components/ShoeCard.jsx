import React, { Component } from "react";
import Update from "./Update";
import api from "./api";

class ShoeCard extends Component {
  state = { visibilityUpdate: false, id: "" };

  changeVis = () => {
    this.setState((prevState) => {
      return { visibilityUpdate: !prevState.visibilityUpdate };
    });
  };

  deleteCat = async () => {
    await api.delete(this.props.cat.id);
    this.props.funcGetCat();
  };

  render() {
    console.log();
    if (this.state.visibilityUpdate)
      return (
        <Update
          id={this.props.cat.id}
          funcGetCats={this.props.funcGetCat}
          visFunc={this.changeVis}
        />
      );
    return (
      <div className="cat-card">
        <div>
          {this.props.cat.first} <strong>the cat</strong>
        </div>
        Family: {this.props.cat.last}
        <br />
        Breed: {this.props.cat.breed}
        <br />
        <div>
          <button onClick={this.deleteCat}>Delete</button>
          <button onClick={this.changeVis}>Update</button>
        </div>
      </div>
    );
  }
}
export default ShoeCard;

// create each cat instance card with call that cat card information

//create a card with a delete button that has a 'delete api' call taht will delete that specific cat and then call the getCat to update the state with out the deleted cat

//has an update componenet = needs an ID from the parent, the get function

//delet btn
//update componenet
