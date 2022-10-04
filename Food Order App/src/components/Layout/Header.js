import React, { Fragment } from "react";
import classes from "./Header.module.css";
import mealImage from "../../assest/meals.jpg";
import HeaderButton from "./HeaderButton";

const Header = () => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Meals</h1>
        <HeaderButton></HeaderButton>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealImage} alt="Delicious Food"></img>
      </div>
    </Fragment>
  );
};

export default Header;
