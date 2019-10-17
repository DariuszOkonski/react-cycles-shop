import React from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom'
import LoggedPage from './LoggedPage';


const AdminPage = (props) => {
  const { login, password, isLogged } = props;
  return (
    <div className="admin-page">
      {isLogged ?
        <LoggedPage
          login={login}
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
  name: PropTypes.string,
  password: PropTypes.string,
  isLogged: PropTypes.bool.isRequired
}

export default AdminPage;