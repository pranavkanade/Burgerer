import React from "react";
import Aux from "./../../hoc/Aux";
import classes from "./Layout.css";

export default props => {
  return (
    <Aux>
      <div>Toolbar, Scrollbar, Third Something</div>
      <main className={classes.Content}>{props.children}</main>
    </Aux>
  );
};
