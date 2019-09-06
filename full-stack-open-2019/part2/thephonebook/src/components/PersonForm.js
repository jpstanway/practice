import React from "react";

const PersonForm = ({
  newName,
  newNumber,
  handleNewNameChange,
  handleNewNumberChange,
  addPerson
}) => (
  <form onSubmit={addPerson}>
    <div>
      name: <input value={newName} onChange={handleNewNameChange} />
    </div>
    <div>
      number: <input value={newNumber} onChange={handleNewNumberChange} />
    </div>
    <div>
      <button type="submit">add</button>
    </div>
  </form>
);

export default PersonForm;
