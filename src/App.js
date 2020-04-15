import React from "react";
import Navbar from "./components/Navbar";
import UsersList from "./components/UsersList";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { UsersProvider } from "./contexts/UsersContext";

const App = () => {
  return (
    <div className="App">
      <UsersProvider>
        <Router>
          <Navbar />
          <UsersList />
        </Router>
      </UsersProvider>
    </div>
  );
};

export default App;
