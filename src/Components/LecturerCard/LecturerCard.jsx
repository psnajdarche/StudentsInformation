import React, { useState } from "react";
import "./lecturer-card.scss";

const LecturerCard = (props) => {
  return (
    <div className="cards">
      <h3>{props.lecturer.firstName}</h3>
      <h3>{props.lecturer.lastName}</h3>
      <button
        className="stnbtn"
        onClick={() => {
          props.setMoreDetails(true);
          props.setGlobalID(props.lecturer);
        }}
      >
        MORE DETAILS
      </button>
    </div>
  );
};
export default LecturerCard;
