import React, { useState } from "react";
import AddUser from "./components/AddUser";
import UserList from "./components/UserList";

function App() {
  const [users, setUsers] = useState([]);
  return (
    <div>
      <AddUser users={users} setUsers={setUsers} />
      <UserList users={users} />
    </div>
  );
}

export default App;
