import React from "react";
import ReactDOM from "react-dom/client";
import UserSearch from "./classes/UserSearch";
import EventComponent from "./events/EventComponent";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const App = () => (
  <div>
    <h1>Hi there!</h1>
    <EventComponent />
    <UserSearch
      users={[
        { name: "anan", age: 10 },
        { name: "billy", age: 20 },
        { name: "charlie", age: 30 },
      ]}
    />
  </div>
);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
