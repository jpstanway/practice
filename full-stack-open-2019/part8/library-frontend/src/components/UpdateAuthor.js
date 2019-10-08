import React, { useState, useEffect } from "react";
import Select from "react-select";

const UpdateAuthor = ({ authors, editAuthor }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");
  const [options, setOptions] = useState([]);

  useEffect(() => {
    setOptions(
      authors.map(author => {
        return { value: author.name, label: author.name };
      })
    );
  }, []);

  const submit = async e => {
    e.preventDefault();
    await editAuthor({
      variables: { name, setBornTo: born }
    });

    setName("");
    setBorn("");
  };

  return (
    <div>
      <h3>Set birth year</h3>
      <form onSubmit={submit}>
        <Select
          value={name}
          onChange={selectedOption => setName(selectedOption.value)}
          options={options}
        />
        <div>
          born{" "}
          <input
            type="number"
            value={born}
            onChange={({ target }) => setBorn(Number(target.value))}
          />
        </div>
        <button type="submit">update author</button>
      </form>
    </div>
  );
};

export default UpdateAuthor;
