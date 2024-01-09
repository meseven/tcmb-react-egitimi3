// import { useState } from "react";
import "./App.css";
import Posts from "./components/Posts";
import Users from "./components/Users";
// import Counter from "./components/Counter";

function App() {
  // const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Users />
      <Posts />
      {/* {isVisible && <Counter />}

      <br />
      <button onClick={() => setIsVisible((prev) => !prev)}>
        {isVisible ? "Hide" : "Show"}
      </button> */}
    </>
  );
}

export default App;
