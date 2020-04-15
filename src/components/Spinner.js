import React from "react";
import spinner from "../spinner.gif";

const Spinner = () => {
  return (
    <div style={{ margin: "5rem", textAlign: "center" }}>
      <img src={spinner} alt="Loading" />
    </div>
  );
};

export default Spinner;
