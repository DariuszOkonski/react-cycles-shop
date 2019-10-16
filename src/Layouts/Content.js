import React from 'react';
import { Route, Switch } from 'react-router-dom';
import StartPage from '../Pages/StartPage';
import BikesPage from '../Pages/BikesPage';
import ContactPage from '../Pages/ContactPage';
import AdminPage from '../Pages/AdminPage';
import ErrorPage from '../Pages/ErrorPage';
import LogInPage from '../Pages/LogInPage';

const Content = () => {
  return (
    <section className='content'>
      <Switch>
        <Route path='/' exact component={StartPage} />
        <Route path='/bikes' component={BikesPage} />
        <Route path='/contact' component={ContactPage} />
        <Route path='/login' render={() => <LogInPage />} />
        <Route path='/admin' render={() => <AdminPage logged={false} />} />
        <Route component={ErrorPage} />
      </Switch>

    </section>
  );
}

export default Content;