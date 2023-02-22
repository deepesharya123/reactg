import React from "react";
import { Link, Outlet } from "react-router-dom";
function Users() {
  const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
  return (
    <div>
      {users.map((user) => {
        return (
          <button key={user.id}>
            <Link to={"users" + user.id}>{`User ${user.id}`}</Link>
          </button>
        );
      })}
      <Outlet />
    </div>
  );
}

export default Users;
