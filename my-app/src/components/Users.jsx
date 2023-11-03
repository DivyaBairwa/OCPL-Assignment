import React, { useEffect, useState } from "react";
import axios from "axios";
import { UserCard } from "./UserCard";
import { Pagination } from "./Pagination";
export const Users = () => {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(3);
  const [totalUsers, setTotalUsers] = useState(1);
  console.log(users);

  const fetchData = async () => {
    const res = await axios(
      `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=${limit}`
      //for making api dynamic
    );
    const total = res.headers.get("X-TOTAL-COUNT");
    setTotalUsers(total || 1);
    setUsers(res.data);
  };
  useEffect(() => {
    fetchData();
  }, [page]);

  return (
    <div>
      {users?.map((user) => {
        return <UserCard {...user} key={user.id} />;
      })}
      <Pagination
        limit={limit}
        totalUsers={totalUsers}
        setPage={setPage}
        page={page}
      />
    </div>
  );
};
