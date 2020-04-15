import React, { useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import "../styles/UsersList.css";

const UsersList = () => {
  const [users, setUsers] = useContext(UsersContext);
  return (
    <div className="users container">
      {users.map((user) => (
        <div key={user.id} className="user">
          {user.login}
          <a className="button" href={user.html_url} target="_blank">
            More
          </a>
        </div>
      ))}
    </div>
  );
};

export default UsersList;
