import { useCallback, useState } from "react";
import Header from "./Header";

const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const increase = useCallback((amount) => {
    setCount((prev) => prev + amount);
  }, []);

  return (
    <div>
      <Header increase={increase} />
      <hr />
      <h1>{count}</h1>
      <button onClick={() => increase(2)}>Arttır</button>
    </div>
  );
};

export default UseCallbackExample;
