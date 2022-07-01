import React from "react";
import ReactDOM from "react-dom/client";
import GuestList from "./state/GuestList";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <div>
    <h1>Hi there!</h1>
    <GuestList />
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
