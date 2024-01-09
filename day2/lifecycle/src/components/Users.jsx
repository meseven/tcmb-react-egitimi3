import Loading from "./Loading";
import FetchError from "./Error";
import useFetch from "../hooks/useFetch";

function Users() {
  const { data, error, loading } = useFetch(`/users`);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div>
      <h2>Users</h2>
      {data.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
