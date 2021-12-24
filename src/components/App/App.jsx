import React from "react";
import ShoeCard from "../ShoeCard";
import Create from "../Create";
import "./App.css";

import api from "../api";

class App extends React.Component {
  state = {
    cats: [],
  };

  getCat = async () => {
    const apiCats = await api.get();
    this.setState({ cats: apiCats.data });
  };

  componentDidMount() {
    this.getCat();
  }

  render() {
    const shoeList = this.state.cats.map((cat) => {
      return <ShoeCard funcGetCat={this.getCat} cat={cat} key={cat.id} />;
    });
    return (
      <div className="main-container">
        <div>{shoeList}</div>
        <Create funcGetCats={this.getCat} />
      </div>
    );
  }
}

export default App;
