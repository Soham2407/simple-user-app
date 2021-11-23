import React from "react";
import ReactDOM from "react-dom";
import Button from "./Button";
import Card from "./Card";
import Wrapper from "./utils/Wrapper";
import classes from "./styles/ErrorModal.module.css";

const Backdrop = (props) => {
  return <div className={classes.backdrop} onClick={props.modalCloseHandler} />;
};

const Modal = (props) => {
  return (
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>{props.title}</h2>
      </header>
      <div className={classes.content}>{props.message}</div>
      <footer className={classes.actions}>
        <Button onClick={props.modalCloseHandler}>Okay</Button>
      </footer>
    </Card>
  );
};

const ErrorModal = (props) => {
  return (
    <Wrapper>
      {ReactDOM.createPortal(
        <Backdrop modalCloseHandler={props.modalCloseHandler} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <Modal
          title={props.title}
          message={props.message}
          modalCloseHandler={props.modalCloseHandler}
        />,
        document.getElementById("modal-root")
      )}
    </Wrapper>
  );
};

export default ErrorModal;
