import React, { useState } from "react";
import Button from "./Button";
import Card from "./Card";
import ErrorModal from "./ErrorModal";
import classes from "./styles/AddUser.module.css";

const AddUser = (props) => {
  const [username, setUsername] = useState("");
  const [age, setAge] = useState("");
  const [error, setError] = useState(null);

  const addUserHandler = (e) => {
    e.preventDefault();

    if (username.trim().length === 0 || age.trim().length === 0) {
      setError({
        title: "Invalid Input",
        message: "Please Enter a Valid name and age (non-empty values)",
      });
      return;
    }

    if (+age < 1) {
      setError({
        title: "Invalid Age",
        message: "Please Enter a Valid age (> 1)",
      });
      return;
    }
    props.setUsers([
      ...props.users,
      { id: Math.random().toString(), name: username, age: age },
    ]);
    setUsername("");
    setAge("");
  };

  const usernameChangeHandler = (e) => {
    setUsername(e.target.value);
  };

  const ageChangeHandler = (e) => {
    setAge(e.target.value);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          setError={setError}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            onChange={usernameChangeHandler}
            value={username}
          />
          <label htmlFor="age">Age (Years)</label>
          <input type="text" id="age" onChange={ageChangeHandler} value={age} />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

export default AddUser;
