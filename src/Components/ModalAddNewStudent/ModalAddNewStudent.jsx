import React, { useState } from "react";
import "./modal-add-new-student.scss";

const ModalAddNewStudent = (props) => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [yob, setYob] = useState("");
  const [isEmployed, setIsEmployed] = useState("");
  const [indexNum, setIndexNum] = useState("");
  const [startingDateOfUniversity, setStartingDateOfUniversity] = useState("");
  function addStudent() {
    fetch(`https://61b9fd8648df2f0017e5a841.mockapi.io/students`, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({
        firstName: firstName,
        lastName: lastName,
        yob: yob,
        isEmployed: isEmployed,
        indexNum: indexNum,
        startingDateOfUni: startingDateOfUniversity,
      }),
    }).then(() => console.log("proslo"));
  }
  return (
    <div className="modal-container">
      <div className="modal-add">
        <label htmlFor="first-name">First name:</label>
        <input
          type="text"
          name="first-name"
          onChange={(e) => setFirstName(e.target.value)}
        />

        <label htmlFor="last-name">Last name:</label>
        <input
          type="text"
          name="last-name"
          onChange={(e) => setLastName(e.target.value)}
        />

        <label htmlFor="yob">Year of Birth:</label>
        <input
          type="number"
          name="yob"
          onChange={(e) => setYob(e.target.value)}
        />

        <label htmlFor="is-employed">Is employed:</label>
        <div className="radio" onChange={(e) => setIsEmployed(e.target.value)}>
          <input type="radio" name="employed" value="true" />
          Yes
          <input type="radio" name="employed" value="false" />
          No
        </div>

        <label htmlFor="indexNUM">IndexNUM:</label>
        <input
          type="number"
          name="indexNUM"
          onChange={(e) => setIndexNum(e.target.value)}
        ></input>
        <label htmlFor="startingDateofUni">Starting Date of Uni:</label>
        <input
          type="number"
          name="startingDateofUni"
          onChange={(e) => setStartingDateOfUniversity(e.target.value)}
        />

        <button className="submit" onClick={addStudent}>
          SUBMIT
        </button>
        <button className="x" onClick={() => props.setNewStudent(false)}>
          X
        </button>
      </div>
    </div>
  );
};
export default ModalAddNewStudent;
