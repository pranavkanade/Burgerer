import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

export default props => {
  const fillingIngredients = Object.keys(props.ingredients).map(fKey => {
    return [...Array(props.ingredients[fKey])].map((_, i) => {
      return <BurgerIngredient key={fKey + i} type={fKey} />;
    });
  });
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {fillingIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
