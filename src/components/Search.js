import React, { useState, useContext } from "react";
import { UsersContext } from "../contexts/UsersContext";
import "../styles/Search.css";

const Search = () => {
  const [users, setUsers] = useContext(UsersContext);
  const [query, setQuery] = useState("");

  const searchUsers = (e) => {
    e.preventDefault();
    fetch(`https://api.github.com/search/users?q=${query}`)
      .then((res) => res.json())
      .then((data) => {
        setUsers(data.items);
        console.log(data);
      });
  };

  return (
    <form onSubmit={searchUsers} className="search-form">
      <div className="container">
        <input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-button">
          Go
        </button>
      </div>
    </form>
  );
};

export default Search;
