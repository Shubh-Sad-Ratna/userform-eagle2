import React from "react";
import "./AddUsers.css";
import Card from "../UI/Card";
import Button from "./Button";
const AddUsers = () => {
  const addUserHandler = (event) => {
    event.preventDefault();
    console.log(event.target.username.value);
    console.log(event.target.age.value);
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
        <label htmlFor="age">Age</label>
        <input type="number" id="age" />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
