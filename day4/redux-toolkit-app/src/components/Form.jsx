import { useState } from "react";
import { useDispatch } from "react-redux";
import { addUser } from "../store/slices/usersSlice";

const Form = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser({ username }));
  };

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: 10 }}>
      <input
        type="text"
        placeholder="Please enter a username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
    </form>
  );
};

export default Form;
