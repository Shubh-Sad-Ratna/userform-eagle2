import React, { useState } from "react";
import "./AddUsers.css";
import Card from "../UI/Card";
import Button from "./Button";

const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0) {
      console.log("Please enter a valid name.");
      return;
    }
    if (enteredAge < 1) {
      console.log("Please enter a valid age (> 0).");
      return;
    }

    const user = {
      id: Math.random().toString(),  // Generate a unique ID
      name: enteredUserName,
      age: enteredAge
    };
    
    props.onAddUser(user);
    setEnteredUserName('');
    setEnteredAge('');
  };

  return (
    <Card className="input">
      <form onSubmit={addUserHandler}>
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          onChange={usernameChangeHandler} 
          value={enteredUserName}
        />
        <label htmlFor="age">Age</label>
        <input 
          type="number" 
          id="age" 
          onChange={ageChangeHandler} 
          value={enteredAge}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Card>
  );
};

export default AddUsers;
