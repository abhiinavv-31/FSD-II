import { useCounter } from "../context/CounterContext";

function ContextCounter({ label }) {
  const { count, increment, decrement } = useCounter();

  return (
    <div className="counter-box">
      <h3>{label} : Global State (ContextAPI) Count: {count}</h3>
      <button onClick={increment}>Increase</button>
      <button onClick={decrement}>Decrease</button>
    </div>
  );
}

export default ContextCounter;
