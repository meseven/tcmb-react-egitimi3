import "./App.css";
import { useState, useMemo } from "react";
import User from "./components/User";
import UseCallbackExample from "./components/UseCallbackExample";
// import { MemoizedRandomNumber } from "./components/RandomNumber";

const App = () => {
  const [name, setName] = useState("");
  const [count, setCount] = useState(0);

  // const text_length = text.length;

  const user_data = useMemo(() => {
    return [name];
  }, [name]);

  return (
    <>
      <UseCallbackExample />
      {/* <h2>count: {count}</h2>
      <button onClick={() => setCount((prev) => prev + 1)}>Increase</button>

      <hr />

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <br />
      <br />

      <User data={user_data} /> */}
      {/* <MemoizedRandomNumber length={text_length < 4 ? text_length : 10} /> */}
    </>
  );
};

export default App;
