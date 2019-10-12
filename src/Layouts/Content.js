import React from 'react';
import StartPage from '../Pages/StartPage';
import BikesPage from '../Pages/BikesPage';
import ContactPage from '../Pages/ContactPage';
import AdminPage from '../Pages/AdminPage';
import ErrorPage from '../Pages/ErrorPage';

const Content = () => {
  return (
    <section className='content'>
      <StartPage />
      <BikesPage />
      <ContactPage />
      <AdminPage />
      <ErrorPage />
    </section>
  );
}

export default Content;