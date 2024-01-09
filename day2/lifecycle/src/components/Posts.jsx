import useFetch from "../hooks/useFetch";
import Loading from "./Loading";
import FetchError from "./Error";

function Posts() {
  const { data, error, loading } = useFetch("/posts");

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div>
      <h2>Posts</h2>
      {data.map((post) => (
        <div key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default Posts;
