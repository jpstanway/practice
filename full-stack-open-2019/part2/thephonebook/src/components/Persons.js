import React from "react";

const Persons = ({ renderPersons }) => (
  <ul style={{ listStyle: "none" }}>{renderPersons()}</ul>
);

export default Persons;
