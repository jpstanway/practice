import React, { useState } from "react";

const Books = ({ show, result }) => {
  const [filter, setFilter] = useState("all genres");

  if (!show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  const books = result.data.allBooks;
  console.log(books);
  return (
    <div>
      <h2>books</h2>
      <p>
        in genre: <strong>{filter}</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books
            .filter(b =>
              filter !== "all genres" ? b.genres.includes(filter) : b
            )
            .map(a => (
              <tr key={a.title}>
                <td>{a.title}</td>
                <td>{a.author.name}</td>
                <td>{a.published}</td>
              </tr>
            ))}
        </tbody>
      </table>
      <div>
        <button onClick={() => setFilter("crime")}>crime</button>
        <button onClick={() => setFilter("conspiracy")}>conspiracy</button>
        <button onClick={() => setFilter("scifi")}>scifi</button>
        <button onClick={() => setFilter("science")}>science</button>
        <button onClick={() => setFilter("horror")}>horror</button>
        <button onClick={() => setFilter("all genres")}>all genres</button>
      </div>
    </div>
  );
};

export default Books;
