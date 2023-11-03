import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";
export const Users = () => {
  const [users, setUsers] = useState([]);
  console.log(users);

  const fetchData = async () => {
    const res = await axios("https://jsonplaceholder.typicode.com/users");
    setUsers(res.data);
  };
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return <UserCard {...user} key={user.id} />;
      })}
    </div>
  );
};
