import { Suspense, lazy } from "react";

const Dashboard = lazy(() => import("./Dashboard"));

function App() {
  return (
    <div>
      <h1>Experiment 5: Lazy Loading Demo</h1>

      <Suspense fallback={<h3>Loading Dashboard...</h3>}>
        <Dashboard />
      </Suspense>
    </div>
  );
}

export default App;
