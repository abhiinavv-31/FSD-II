import { useState } from "react";

export default function Form() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = () => {
    if (password.length < 6) {
      setError("Min 6 characters");
    } else {
      alert("Form submitted successfully");
    }
  };

  return (
    <div>
      <input
        aria-label="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleSubmit}>Login</button>
      {error && <p>{error}</p>}
    </div>
  );
}
