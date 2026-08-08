import React, { useEffect, useState } from "react";

const Task2ApiFetch = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading ? (
        <h1>Loading...</h1>
      ) : (
        users.map((user) => {
          return <h2 key={user.id}>{user.name}</h2>;
        })
      )}
    </div>
  );
};

export default Task2ApiFetch;
