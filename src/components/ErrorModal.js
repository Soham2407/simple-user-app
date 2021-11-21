import React from "react";
import Button from "./Button";
import Card from "./Card";
import classes from "./styles/ErrorModal.module.css";

const ErrorModal = (props) => {
  const modalCloseHandler = () => {
    props.setError(null);
  };
  return (
    <div>
      <div className={classes.backdrop} onClick={modalCloseHandler} />
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>{props.message}</div>
        <footer className={classes.actions}>
          <Button onClick={modalCloseHandler}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
