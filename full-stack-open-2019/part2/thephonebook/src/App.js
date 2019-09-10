import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import PersonForm from "./components/PersonForm";
import Persons from "./components/Persons";
import Notification from "./components/Notification";

import personService from "./services/persons";

import "./index.css";

const App = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [newNumber, setNewNumber] = useState("");
  const [filter, setFilter] = useState("");
  const [notification, setNotification] = useState(null);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    personService.getAll().then(response => setPersons(response.data));
  }, []);

  const addPerson = event => {
    event.preventDefault();

    const checkPersons = persons.find(person => person.name === newName);

    if (checkPersons) {
      if (
        window.confirm(
          `${newName} is already added to phonebook. Replace the old number with a new one?`
        )
      ) {
        const changedPerson = { ...checkPersons, number: newNumber };

        personService
          .update(checkPersons.id, changedPerson)
          .then(response => {
            setPersons(
              persons.map(person =>
                person.id !== checkPersons.id ? person : response.data
              )
            );

            handleNotification(`Updated ${checkPersons.name}`);
          })
          .catch(() => {
            handleNotification(
              `${checkPersons.name} has already been removed from server`,
              true
            );
            setPersons(persons.filter(p => p.id !== checkPersons.id));
          });
      }
    } else {
      const newPerson = {
        name: newName,
        number: newNumber
      };

      personService.create(newPerson).then(response => {
        setPersons(persons.concat(response.data));
        handleNotification(`Added ${response.data.name}`);
      });
    }

    setNewName("");
    setNewNumber("");
  };

  const handleDeletePerson = (id, name) => {
    if (window.confirm(`Delete ${name}?`)) {
      personService.deletePerson(id).then(() => {
        setPersons(persons.filter(person => person.id !== id));
        handleNotification(`Deleted ${name}`);
      });
    }
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
        <Persons
          key={person.id}
          person={person}
          handleDeletePerson={handleDeletePerson}
        />
      ));
  };

  const handleNotification = (message, error) => {
    setNotification(message);
    setIsError(error);
    setTimeout(() => {
      setNotification(null);
    }, 5000);
  };

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notification} isError={isError} />
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
      <ul style={{ listStyle: "none" }}>{renderPersons()}</ul>
    </div>
  );
};

export default App;
