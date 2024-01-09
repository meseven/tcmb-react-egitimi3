import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    return navigate("/");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="">
          email <br />
          <input type="text" />
        </label>
        <label htmlFor="">
          password
          <input type="text" />
        </label>
        <button>Login</button>
      </form>
    </div>
  );
}

export default Login;
