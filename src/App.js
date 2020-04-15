import React from "react";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { UsersProvider } from "./contexts/UsersContext";
import Search from "./components/Search";

const App = () => {
  return (
    <div className="App">
      <UsersProvider>
        <Router>
          <Navbar />
          <Search />
          <UsersList />
        </Router>
      </UsersProvider>
    </div>
  );
};

export default App;
