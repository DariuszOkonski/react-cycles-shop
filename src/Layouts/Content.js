import React, { Component } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import StartPage from '../Pages/StartPage';
import BikesPage from '../Pages/BikesPage';
import ContactPage from '../Pages/ContactPage';
import AdminPage from '../Pages/AdminPage';
import ErrorPage from '../Pages/ErrorPage';
import LogInPage from '../Pages/LogInPage';

class Content extends Component {
  state = {
    login: '',
    password: '',
  }

  handleLogin = (e) => {
    this.setState({
      login: e.target.value,
    })
  }

  handlePassword = (e) => {
    this.setState({
      password: e.target.value,
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const { login, password } = this.state;

    if (login.length > 0 && password.length > 0) {
      this.props.onHandleIsLogged();
    }

  }

  render() {
    return (
      <section className='content'>
        <Switch>
          <Route path='/' exact component={StartPage} />
          <Route path='/bikes' component={BikesPage} />
          <Route path='/contact' component={ContactPage} />
          <Route path='/login' render={() =>
            <LogInPage
              onHandleSubmit={this.handleSubmit}
              onHandleLogin={this.handleLogin}
              onHandlePassword={this.handlePassword}
              login={this.state.login}
              password={this.state.password}
            />}
          />
          <Route path='/admin' render={() =>
            <AdminPage login={this.state.login} password={this.state.password} isLogged={this.props.isLogged} />}
          />

          <Route component={ErrorPage} />
        </Switch>

        {this.props.isLogged && <Redirect to='/admin' />}

      </section>
    );
  }
}

export default Content;