import React from "react";
import ReactDOM from "react-dom";
import classes from "./Modal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop}></div>;
};

const ModalOverlays = (props) => {
  return <div className={classes.modal}>{props.children}</div>;
};

const Modal = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(<Backdrop />, document.getElementById("overlays"))}
      {ReactDOM.createPortal(
        <ModalOverlays>{props.children}</ModalOverlays>,
        document.getElementById("overlays")
      )}
    </React.Fragment>
  );
};

export default Modal;
