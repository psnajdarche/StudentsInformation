import React, { useState } from "react";
import "./student-card.scss";

const StudentCard = (props) => {
  function setEmployed() {
    fetch(
      `https://61b9fd8648df2f0017e5a841.mockapi.io/students/${props.student.id}`,
      {
        method: "PUT",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({
          isEmployed: true,
        }),
      }
    ).then(console.log("proslo"));
  }
  return (
    <div className="cards">
      <h3>{props.student.firstName}</h3>
      <h3>{props.student.lastName}</h3>
      <button className="stnbtn" onClick={setEmployed}>
        IS EMPLOYED
      </button>
      <button
        className="stnbtn"
        onClick={() => {
          props.setMoreDetails(true);
          props.setGlobalID(props.student);
        }}
      >
        MORE DETAILS
      </button>
    </div>
  );
};
export default StudentCard;
