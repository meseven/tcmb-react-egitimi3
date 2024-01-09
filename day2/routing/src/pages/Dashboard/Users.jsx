import { Link } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function Users() {
  const { data, error, loading } = useFetch(`/users`);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <h2>Users</h2>
      {data.map((user) => (
        <Link to={`/users/${user.id}`} key={user.id} state={{ id: user.id }}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}

export default Users;
