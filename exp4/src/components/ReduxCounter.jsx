import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../store/slices/counterSlice";

function ReduxCounter({ label }) {
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div className="counter-box">
      <h3>{label} : Global State (Redux) Count: {count}</h3>
      <button onClick={() => dispatch(increment())}>Increase</button>
      <button onClick={() => dispatch(decrement())}>Decrease</button>
    </div>
  );
}

export default ReduxCounter;
