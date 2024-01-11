import { useSelector, useDispatch } from "react-redux";
import Form from "./Form";
import {
  fetchUsers,
  removeUser,
  removeAll,
  selectAll,
  selectError,
  selectLoading,
  selectTotal,
} from "../store/slices/usersSlice";
import { useEffect } from "react";
import { IconXboxX } from "@tabler/icons-react";

const Users = () => {
  const dispatch = useDispatch();
  const list = useSelector(selectAll);
  const total = useSelector(selectTotal);
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <h2>
        <span data-cy="title">Users</span> (
        <span data-cy="total-user">{total}</span>)
      </h2>

      <Form />

      <button onClick={() => dispatch(removeAll())}>Remove All</button>
      <br />

      {total === 0 && (
        <div className="empty-list" data-cy="empty-list">
          User list is empty.
        </div>
      )}

      <div className="user-list" data-cy="user-list">
        {list.map((user) => (
          <div key={user.id}>
            {user.username}

            {/* <button id="delete_button">delete</button> */}

            <div
              className="delete-btn"
              onClick={() => dispatch(removeUser(user.id))}
            >
              <IconXboxX size={"1rem"} color="#dd5757" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
