import React, { useState, useRef } from "react";
import Button from "./Button";
import Card from "./Card";
import ErrorModal from "./ErrorModal";
import classes from "./styles/AddUser.module.css";

const AddUser = (props) => {
  const nameInputEl = useRef(null);
  const ageInputEl = useRef(null);
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();

    if (
      nameInputEl.current.value.trim().length === 0 ||
      ageInputEl.current.value.trim().length === 0
    ) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a Valid name and age (non-empty values)",
      });
      return;
    }

    if (+ageInputEl.current.value < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid age (> 1)",
      });
      return;
    }
    props.setUsers([
      ...props.users,
      {
        id: Math.random().toString(),
        name: nameInputEl.current.value,
        age: ageInputEl.current.value,
      },
    ]);
    nameInputEl.current.value = "";
    ageInputEl.current.value = "";
  };

  const modalCloseHandler = () => {
    setError(null);
  };
  return (
    <React.Fragment>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          modalCloseHandler={modalCloseHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input type="text" id="name" ref={nameInputEl} />
          <label htmlFor="age">Age (Years)</label>
          <input type="text" id="age" ref={ageInputEl} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </React.Fragment>
  );
};

export default AddUser;
