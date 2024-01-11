import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/usersSlice";
import { nanoid } from "@reduxjs/toolkit";

const Form = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ id: nanoid(), username }));
    setUsername("");
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 10 }} data-cy="form">
      <input
        data-cy="username-input"
        type="text"
        placeholder="Please enter a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default Form;
