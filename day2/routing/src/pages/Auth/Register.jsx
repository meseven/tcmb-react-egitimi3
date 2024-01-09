import { useNavigate } from "react-router-dom";

function Register() {
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
        </label>{" "}
        <label htmlFor="">
          password <br />
          <input type="text" />
        </label>{" "}
        <label htmlFor="">
          confirm password <br />
          <input type="text" />
        </label>
        <button>Register</button>
      </form>
    </div>
  );
}

export default Register;
