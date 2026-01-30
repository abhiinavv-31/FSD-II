import { useState } from "react";

function LocalCounter({ label }) {
  const [count, setCount] = useState(0);

  return (
    <div className="counter-box">
      <h3>{label} : Local State Count: {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
    </div>
  );
}

export default LocalCounter;
