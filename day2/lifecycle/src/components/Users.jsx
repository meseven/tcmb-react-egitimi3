import { useEffect, useState } from "react";
import axios from "axios";
import Loading from "./Loading";
import FetchError from "./Error";

const BASE_ENDPOINT = "https://jsonplaceholder.typicode.com";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios(`${BASE_ENDPOINT}/users`)
      .then(({ data }) => {
        setUsers(data);

        axios(`${BASE_ENDPOINT}/posts?userId=${data[0].id}`)
          .then(({ data: postData }) => {
            console.log(postData);

            axios(`${BASE_ENDPOINT}/comments?postId=${postData[0].id}`)
              .then(({ data: commentsData }) => {
                console.log(commentsData);
              })
              .catch(console.log)
              .finally(() => {});
          })
          .catch(console.log)
          .finally(() => {});
      })
      .catch(({ message }) => setError(message))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <FetchError />;
  }

  return (
    <div>
      <h2>Users</h2>
      {users.map((user) => (
        <div key={user.id}>{user.name}</div>
      ))}
    </div>
  );
}

export default Users;
