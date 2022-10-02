import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assest/meals.jpg";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <button>Cart</button>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Delicious Food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
