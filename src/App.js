import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <>
      <AddUser users={users} setUsers={setUsers} />
      <UserList users={users} />
    </>
  );
}

export default App;
