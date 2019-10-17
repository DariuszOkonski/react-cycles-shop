import React from 'react';
import PropTypes from 'prop-types';

const LoggedPage = (props) => {
  const { name, password } = props;

  return (
    <div className="logged-page">
      <h2 className="logged-page__header">Admin Page</h2>
      <p className="logged-page__paragraph">You have successfully logged</p>
      <p className="logged-page__paragraph"><span>Login: </span>{name}</p>
      <p className="logged-page__paragraph"><span>Password: </span>{password}</p>
    </div>
  );
}

LoggedPage.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
}

export default LoggedPage;