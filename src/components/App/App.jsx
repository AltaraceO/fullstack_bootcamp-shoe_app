import React from "react";
import ShoeCard from "../ShoeCard";
import "./App.css";

import api from "../api";

class App extends React.Component {
  state = {
    cats: [],
  };

  getCat = async () => {
    let apiCats = await api.get();
    this.setState({ cats: apiCats.data });
  };

  componentDidMount() {
    this.getCat();
  }

  render() {
    let shoeList = this.state.cats.map((cat) => {
      return <ShoeCard func={this.getCat} cat={cat} key={cat.id} />;
    });
    return (
      <div>
        <div>{shoeList}</div>
        {/* <Create /> */}
      </div>
    );
  }
}

export default App;
