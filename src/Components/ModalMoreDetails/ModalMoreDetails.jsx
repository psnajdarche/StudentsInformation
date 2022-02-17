import React, { useState } from "react";
import "./modal-more-details.scss";

const ModalMoreDetails = (props) => {
  return (
    <div className="modal-container">
      <div className="modal-main">
        <h3>First Name: {props.globalID.firstName}</h3>
        <h3>Last Name: {props.globalID.lastName} </h3>
        <h3>Year of Birth: {props.globalID.yob}</h3>
        {props.globalID.indexNum && (
            <>
        <h3>Index: {props.globalID.indexNum}</h3>
        <h3>StartDateOfUni: {props.globalID.startingDateofUni}</h3>
        <h3>isEmployed: {props.globalID.isEmployed? 'yes': 'no'}</h3>
        </>)}
       {!props.globalID.indexNum && (
           <>
           <h3>Subject: {props.globalID.subject}</h3></>
       )}
        
        <button onClick={()=>props.setMoreDetails(false)}>X</button>
      </div>
    </div>

  );
};
export default ModalMoreDetails;
