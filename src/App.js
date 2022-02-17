import React, { useState, useEffect } from "react";
import Header from "../src/Components/Header/Header";
import HomePage from "./pages/Home-page/HomePage";
const App = (props) => {
  const [studentsCard, setStudentsCard] = useState([]);
  const [lecturersCards, setLecturersCard] = useState([]);
  const [newStudent, setNewStudent] = useState(false);

  useEffect(() => {
    fetch(`https://61b9fd8648df2f0017e5a841.mockapi.io/students/`)
      .then((res) => res.json())
      .then((res) => setStudentsCard(res));

    fetch(`https://61b9fd8648df2f0017e5a841.mockapi.io/lecturers/`)
      .then((res) => res.json())
      .then((res) => setLecturersCard(res));
  }, []);
  return (
    <>
      <Header setNewStudent={setNewStudent} />
      <HomePage
        newStudent={newStudent}
        studentsCard={studentsCard}
        lecturersCards={lecturersCards}
        setNewStudent={setNewStudent}
      />
    </>
  );
};

export default App;
