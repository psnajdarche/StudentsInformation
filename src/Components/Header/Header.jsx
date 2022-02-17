import React, { useState } from "react";
import "./header.scss";

const Header = (props) => {
  return (
    <div className="header">
      <h1>BIT</h1>
      <button className="add" onClick={() => props.setNewStudent(true)}>
        Add New Student
      </button>
    </div>
  );
};
export default Header;
