import React, { useState } from "react";

const UpdateAuthor = ({ editAuthor }) => {
  const [name, setName] = useState("");
  const [born, setBorn] = useState("");

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
        <div>
          name{" "}
          <input
            type="text"
            value={name}
            onChange={({ target }) => setName(target.value)}
          />
        </div>
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
