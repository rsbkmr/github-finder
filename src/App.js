import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";
import { UsersProvider } from "./contexts/UsersContext";

const App = () => {
  return (
    <div className="App">
      <UsersProvider>
        <Router>
          <Navbar />
        </Router>
      </UsersProvider>
    </div>
  );
};

export default App;
