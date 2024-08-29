import React, { useState } from "react";
import "./AddUsers.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUsers = (props) => {
  const [enteredUserName, setEnteredUserName] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState(null);

  const usernameChangeHandler = (event) => {
    setEnteredUserName(event.target.value);
  };

  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  const addUserHandler = (event) => {
    event.preventDefault();
    if (enteredUserName.trim().length === 0 || enteredAge.trim().length === 0 || +enteredAge < 1) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (age > 0)."
      });
      return;
    }

    props.onAddUser({
      id: Math.random().toString(),
      name: enteredUserName,
      age: enteredAge,
    });
    setEnteredUserName('');
    setEnteredAge('');
  };

  const errorHandler = () => {
    console.log("Okay button clicked!");  // Add this for debugging
    setError();
  };

  return (
    <>
      {error && (
        <ErrorModal 
          title={error.title} 
          message={error.message} 
          onConfirm={errorHandler} 
        />
      )}
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
    </>
  );
};

export default AddUsers;
