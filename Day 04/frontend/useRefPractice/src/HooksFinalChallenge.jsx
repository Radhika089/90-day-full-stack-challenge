import React, { useRef, useState } from "react";
import { useEffect } from "react";

const HooksFinalChallenge = () => {
  const [search, setSearch] = useState("");
  const previousSearch = useRef("");
  const [searchCount, setSearchCount] = useState(0);

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const firstRender = useRef(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
      return;
    }

    previousSearch.current = search;
    setSearchCount((prev) => prev + 1);
  }, [search]);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <div>
        <h1>Search Users</h1>
        <input type="text" onChange={(e) => setSearch(e.target.value)} />
      </div>
      <h2>
        {loading ? (
          <p>Loading...</p>
        ) : (
          filteredUsers.map((user) => {
            return <p key={user.id}>{user.name} </p>;
          })
        )}
      </h2>
      <h1>Current Search: {search} </h1>
      <h1>Previous Search: {previousSearch.current} </h1>
      <h2>Search Count:{searchCount} </h2>
    </div>
  );
};

export default HooksFinalChallenge;
