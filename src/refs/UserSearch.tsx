import React, { useRef, useState } from "react";

interface User {
  name: string;
  age: number;
}

const users: User[] = [
  { name: "anan", age: 10 },
  { name: "billy", age: 20 },
  { name: "charlie", age: 30 },
];

function UserSearch(): JSX.Element | null {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [search, setSearch] = useState("");
  const [user, setUser] = useState<User | undefined>();

  const searchGuest = () => {
    setUser(users.filter((user) => user.name === search)?.[0]);
  };

  return (
    <div>
      <h3>UserSearch</h3>
      <input
        ref={inputRef}
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={searchGuest}>Search</button>
      <div>
        Name : {user?.name || "-"}
        <br />
        Age : {user?.age || "-"}
      </div>
    </div>
  );
}

export default UserSearch;
