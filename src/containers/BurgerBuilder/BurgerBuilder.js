import React, { Component } from "react";
import Aux from "../../hoc/Aux";
import Burger from "./../../components/Burger/Burger";

class BurgerBuilder extends Component {
  render() {
    return (
      <Aux>
        <div>This is just before the top of the burger</div>
        <Burger />
        <div>Tool to add Burger Ingredients</div>
      </Aux>
    );
  }
}

export default BurgerBuilder;
