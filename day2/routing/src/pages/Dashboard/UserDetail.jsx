import { useParams, Navigate } from "react-router-dom";
import useFetch from "../../hooks/useFetch";

function UserDetail() {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/users/${id}`);

  if (loading) {
    return <div>loading...</div>;
  }

  if (error) {
    return <Navigate to={"/users"} />;
  }

  return (
    <div>
      <h1>{data.name}</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}

export default UserDetail;
