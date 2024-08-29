import React, { useState } from "react";
import AddUsers from "./Components/Users/AddUsers";
import UserList from "./Components/Users/UserList";

function App() {
  const [userList, setUserList] = useState([]);

  const addUserHandler = (user) => {
    setUserList((prev) => {
      return [...prev, user];
    });
  };

  return (
    <div>
      <AddUsers onAddUser={addUserHandler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
