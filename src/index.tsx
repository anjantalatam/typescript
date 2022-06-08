import React from "react";
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <div>
    <h1>Hi there!</h1>
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
