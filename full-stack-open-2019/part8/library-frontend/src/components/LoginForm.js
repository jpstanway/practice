import React, { useState } from "react";

const LoginForm = ({ show, login, setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  if (!show) {
    return null;
  }

  const handleLogin = async e => {
    e.preventDefault();

    const result = await login({
      variables: { username, password }
    });

    if (result) {
      const token = result.data.login.value;
      setToken(token);
      localStorage.setItem("booksapp-user-token", token);
    }

    setUsername("");
    setPassword("");
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        username{" "}
        <input
          type="text"
          placeholder="enter username"
          value={username}
          onChange={({ target }) => setUsername(target.value)}
        />
      </div>
      <div>
        password{" "}
        <input
          type="password"
          placeholder="enter password"
          value={password}
          onChange={({ target }) => setPassword(target.value)}
        />
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;
