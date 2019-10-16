import React from 'react';

const LogInPage = () => {
  return (
    <form className="login-page">
      <h2>Log In to Admin Panel</h2>

      <label htmlFor="login">Login:</label>
      <input type="text" name="login" />

      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="" />

      <button type="submit">Submit</button>
    </form>
  );
}

export default LogInPage;