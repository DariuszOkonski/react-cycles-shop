import React from 'react';

const LoggedPage = () => {
  return (
    <div className="logged-page">
      <h2 className="logged-page__header">Admin Page</h2>
      <p className="logged-page__paragraph">You have successfully logged</p>
      <p className="logged-page__paragraph"><span>Login:</span> John</p>
      <p className="logged-page__paragraph"><span>Password:</span> abc</p>
    </div>
  );
}

export default LoggedPage;