import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import LoggedPage from './LoggedPage';


const AdminPage = ({ name, password, isLogged }) => {
  return (
    <div className="admin-page">
      {isLogged ?
        <LoggedPage
          name={name}
          password={password}
        />
        :
        <Redirect
          to='/login'
        />}
    </div>
  );
}

AdminPage.propTypes = {
  name: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  isLogged: PropTypes.bool.isRequired
}

export default AdminPage;