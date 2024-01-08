import { useState } from "react";

const Profile = () => {
  const [data, setData] = useState({
    name: "Mehmet",
    age: 30,
  });

  const handleClick = () => {
    setData({ ...data, surname: "Seven" });
  };

  return (
    <div>
      <div>{data.name}</div>

      <button onClick={handleClick}>İsmi değiştir</button>
    </div>
  );
};

export default Profile;
