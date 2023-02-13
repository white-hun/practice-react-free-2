import React from "react";

const students = [
  {
    id: 1,
    name: "White",
  },
  {
    id: 2,
    name: "Black",
  },
  {
    id: 3,
    name: "Red",
  },
  {
    id: 4,
    name: "Blue",
  },
];

function AttendanceBook(props) {
  return (
    <ul>
      {students.map((student) => {
        return <li key={student.id}>{student.name}</li>;
      })}
    </ul>
  );
}

export default AttendanceBook;
