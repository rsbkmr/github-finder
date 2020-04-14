import React, { useState, useEffect, createContext } from "react";

const UsersContext = createContext();

const UsersProvider = (props) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
      });
  }, []);

  return (
    <UsersContext.Provider value={[users, setUsers]}>
      {props.children}
    </UsersContext.Provider>
  );
};

export { UsersContext, UsersProvider };
