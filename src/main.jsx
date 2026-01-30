import './index.css'
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./store";
import { CounterProvider } from "./context/CounterContext";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <CounterProvider>
      <App />
    </CounterProvider>
  </Provider>
);
