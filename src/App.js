import React from "react";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

const App = () => {
  return (
    <div className="App">
      <Router>
        <Navbar />
      </Router>
    </div>
  );
};

export default App;
