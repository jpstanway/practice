import React, { useState } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", number: "040-123456" },
    { name: "Ada Lovelace", number: "39-44-5323523" },
    { name: "Dan Abramov", number: "12-43-234345" },
    { name: "Mary Poppendieck", number: "39-23-6423122" }
  ]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");

  const addPerson = event => {
    event.preventDefault();

    const checkPersons = persons.find(person => person.name === newName);

    if (checkPersons) {
      alert(`${newName} is already added to phonebook`);
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };

      setPersons(persons.concat(newPerson));
    }

    setNewName("");
    setNewNumber("");
  };

  const handleNewNameChange = event => {
    setNewName(event.target.value);
  };

  const handleNewNumberChange = event => {
    setNewNumber(event.target.value);
  };

  const handleFilter = event => {
    setFilter(event.target.value);
  };

  const renderPersons = () => {
    return persons
      .filter(person =>
        person.name.toLowerCase().includes(filter.toLowerCase())
      )
      .map(person => (
        <li key={person.name}>
          {person.name} {person.number}
        </li>
      ));
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter filter={filter} handleFilter={handleFilter} />
      <h2>Add new</h2>
      <PersonForm
        newName={newName}
        newNumber={newNumber}
        handleNewNameChange={handleNewNameChange}
        handleNewNumberChange={handleNewNumberChange}
        addPerson={addPerson}
      />
      <h2>Numbers</h2>
      <Persons renderPersons={renderPersons} />
    </div>
  );
};

export default App;
