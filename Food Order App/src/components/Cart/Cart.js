import React from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";

const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }];

const Cart = (props) => {
  return (
    <Modal>
      <ul className={classes["cart-items"]}>
        {cartItems.map((item) => (
          <li>{item.name}</li>
        ))}
      </ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>30.00</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Cancel</button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
