import useFetch from "../hooks/useFetch";
// import Loading from "./Loading";
import FetchError from "./Error";
import { useState } from "react";

function User() {
  const [userId, setUserId] = useState("1");
  const { data, error, loading } = useFetch(`/users/${userId}`);

  const handleClickNext = () => {
    const is_last_user = data.id === 10;

    setUserId(is_last_user ? 1 : data.id + 1);
  };

  if (error) {
    return <FetchError />;
  }

  return (
    <div>
      <button onClick={handleClickNext} disabled={loading}>
        Next{" "}
        {loading ? "(Loading)" : `(${data.id + 1 === 11 ? "1" : data.id + 1})`}
      </button>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default User;
