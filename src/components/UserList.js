import React from "react";
import Card from "./Card";
import classes from "./styles/UserList.module.css";

const UserList = (props) => {
  return (
    <Card className={classes.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} is {user.age} years old.
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UserList;