import React from "react";
import ReactDOM from "react-dom/client";
import EventComponent from "./events/EventComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <div>
    <h1>Hi there!</h1>
    <EventComponent />
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
