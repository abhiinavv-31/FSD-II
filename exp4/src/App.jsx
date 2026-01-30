import './App.css';
import LocalCounter from "./components/LocalCounter";
import ContextCounter from "./components/ContextCounter";
import ReduxCounter from "./components/ReduxCounter";

function App() {
  return (
    <div className="main-container">
      <h1>Experiment 4: To Demonstrate State Management</h1>

      <LocalCounter label="1" />
      <LocalCounter label="2" />

      <ContextCounter label="1" />
      <ContextCounter label="2" />

      <ReduxCounter label="1" />
      <ReduxCounter label="2" />
    </div>
  );
}

export default App;
