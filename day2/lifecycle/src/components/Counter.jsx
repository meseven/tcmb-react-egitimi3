import { useEffect, useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(1);

  useEffect(() => {
    console.log("mounted");

    const timer = setInterval(() => {
      console.log("interval çalıştı");
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      clearInterval(timer);
      console.log("unmounted");
    };
  }, []);

  useEffect(() => {
    // console.log("count state değişti");
  }, [count]);

  useEffect(() => {
    console.log("amount state değişti");
  }, [amount]);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount((prev) => prev + amount)}>Arttır</button>

      <h2>Amount: {amount}</h2>
      <button onClick={() => setAmount(1)}>1</button>
      <button onClick={() => setAmount(5)}>5</button>
      <button onClick={() => setAmount(10)}>10</button>
    </div>
  );
}

export default Counter;
