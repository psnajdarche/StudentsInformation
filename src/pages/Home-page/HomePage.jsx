import React, { useState } from "react";
import "./home-page.scss";
import StudentCard from "../../Components/StudentCard/StudentCard";
import LecturerCard from "../../Components/LecturerCard/LecturerCard";
import ModalMoreDetails from "../../Components/ModalMoreDetails/ModalMoreDetails";
import ModalAddNewStudent from "../../Components/ModalAddNewStudent/ModalAddNewStudent";
const HomePage = (props) => {
  const [moreDetails, setMoreDetails] = useState(false);
  const [globalID, setGlobalID] = useState({});
  return (
    <>
      <h2>STUDENTS</h2>
      <div className="studenti">
        <div className="student-card-container">
          {props.studentsCard.map((e, i) => {
            return (
              <StudentCard
                setMoreDetails={setMoreDetails}
                student={e}
                setGlobalID={setGlobalID}
              ></StudentCard>
            );
          })}
        </div>
      </div>
      <h2>LECTURERS</h2>
      <div className="lecturer-card-container">
        {props.lecturersCards.map((e, i) => (
          <LecturerCard
            lecturer={e}
            setGlobalID={setGlobalID}
            setMoreDetails={setMoreDetails}
          />
        ))}
      </div>
      {moreDetails && (
        <ModalMoreDetails
          setMoreDetails={setMoreDetails}
          setGlobalID={setGlobalID}
          studentsCard={props.studentsCard}
          globalID={globalID}
        ></ModalMoreDetails>
      )}
      {props.newStudent && (
        <ModalAddNewStudent
          setNewStudent={props.setNewStudent}
        ></ModalAddNewStudent>
      )}
    </>
  );
};
export default HomePage;
