import React from 'react';

const LogInPage = (props) => {
  const { login, password, onHandleLogin, onHandlePassword, onHandleSubmit } = props;

  return (
    <form onSubmit={onHandleSubmit} className="login-page">
      <h2>Log In to Admin Panel</h2>

      <label htmlFor="login">Login:</label>
      <input
        value={login}
        onChange={(e) => onHandleLogin(e)}
        type="text"
        name="login"
        placeholder="Type anything as a login..."
      />

      <label htmlFor="password">Password:</label>
      <input
        value={password}
        onChange={(e) => onHandlePassword(e)}
        type="password"
        name="password"
        placeholder="Type anything as a password..."
      />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LogInPage;