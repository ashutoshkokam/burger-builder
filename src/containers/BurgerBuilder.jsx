import React, { Component } from "react";
import Burger from "../components/Burger/Bureger";
import Auxillary from "../hoc/Auxillary";

class BurgerBuilder extends Component {
  render() {
    return (
      <Auxillary>
        <div><Burger></Burger></div>
      </Auxillary>
    );
  }
}

export default BurgerBuilder;
