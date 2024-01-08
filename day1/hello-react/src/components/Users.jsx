import { useState } from "react";

const Users = () => {
  const [data, setData] = useState([
    {
      id: 1,
      name: "Mete",
    },
    {
      id: 2,
      name: "Filiz",
    },
    {
      id: 3,
      name: "Burak",
    },
  ]);

  const addUser = () => {
    setData((prev) => [...prev, { id: 4, name: "Kerim" }]);
  };

  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}

      <button onClick={addUser}>Add User</button>
    </div>
  );
};

export default Users;
