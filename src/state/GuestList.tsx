import React, { useState } from "react";

function GuestList(): JSX.Element | null {
  const [name, setName] = useState("");

  return (
    <div>
      <h3>GuestList</h3>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Add Name</button>
    </div>
  );
}

export default GuestList;
