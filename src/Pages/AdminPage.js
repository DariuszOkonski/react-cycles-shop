import React from 'react';
import { Redirect } from 'react-router-dom'
import LoggedPage from './LoggedPage';

const AdminPage = ({ logged }) => {
  return (
    <div className="admin-page">
      {logged ? <LoggedPage /> : <Redirect to='/login' />}
    </div>
  );
}

export default AdminPage;