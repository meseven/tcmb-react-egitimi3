import { useSelector } from "react-redux";
import Form from "./Form";
import { selectAll } from "../store/slices/usersSlice";

const Users = () => {
  const list = useSelector(selectAll);

  return (
    <div>
      <h2>Users</h2>

      <Form />

      {list.map((user) => (
        <div key={user.id}>{user.username}</div>
      ))}
    </div>
  );
};

export default Users;
