import { useState } from "react";
// import CounterFooter from "./CounterFooter";

const Counter = () => {
  const [count, setCount] = useState(0);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <>
      <h1>{count}</h1>
      <button onClick={handleClick}>Increase (+)</button>
      {/* <CounterFooter count={count} /> */}
    </>
  );
};

export default Counter;
