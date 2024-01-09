import { Link } from "react-router-dom";

function Home() {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Link to={"/users"}>Go to Users page</Link>
      <Link to={"/users/1"}>Go to user detail with provided user id(1)</Link>
    </div>
  );
}

export default Home;
