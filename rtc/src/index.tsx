import React from "react";
import ReactDOM from "react-dom/client";
import UserSearch from "./refs/UserSearch";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <div>
    <h1>Hi there!</h1>
    <UserSearch />
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
