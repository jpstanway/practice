import React from "react";

const Persons = ({ person: { id, name, number }, handleDeletePerson }) => {
  return (
    <li>
      {name} {number}{" "}
      <button onClick={() => handleDeletePerson(id, name)}>delete</button>
    </li>
  );
};

export default Persons;
