import React from "react";

const Recommendations = ({ show, result, currentUser }) => {
  if (!show) {
    return null;
  }

  if (result.loading) {
    return <div>loading...</div>;
  }

  const books = result.data.allBooks;
  const user = currentUser.data.me;

  if (!user) {
    return <div>you must be logged in to view this page</div>;
  }

  return (
    <div>
      <h2>recommendations</h2>
      <p>
        books in your favorite genre <strong>{user.favoriteGenre}</strong>
      </p>
      <table>
        <tbody>
          <tr>
            <th></th>
            <th>author</th>
            <th>published</th>
          </tr>
          {books.map(b => (
            <tr key={b.id}>
              <td>{b.title}</td>
              <td>{b.author.name}</td>
              <td>{b.published}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Recommendations;
