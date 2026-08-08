import React, { useEffect, useState } from "react";

const Task3SearchEffect = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    console.log("Search", search);
  }, [search]);

  const filteredUsers = users.filter((user) => {
    return user.name.toLowerCase().includes(search.toLowerCase());
  });

  return (
    <div>
      <input
        type="text"
        placeholder="Search by name"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{" "}
      {loading ? (
        <h2>Loading...</h2>
      ) : (
        filteredUsers.map((user) => {
          return <h2 key={user.id}>{user.name} </h2>;
        })
      )}{" "}
    </div>
  );
};

export default Task3SearchEffect;
