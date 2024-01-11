import { useSelector, useDispatch } from "react-redux";
import { increment } from "../store/slices/counterSlice";

const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="card">
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => {}}>Decrement</button>
      <button onClick={() => {}}>Increment by amount</button>
    </div>
  );
};

export default Counter;
