import React, { Component } from 'react';
import Navigation from './Navigation';
import Content from './Content';

class Main extends Component {
  state = {
    isLogged: false,
  }

  handleIsLogged = () => {
    this.setState({
      isLogged: true,
    })
  }

  render() {
    return (
      <main data-test="main-wrapper" className='main'>
        <Navigation
          isLogged={this.state.isLogged}
          data-test="navigation-component"
        />
        <Content
          onHandleIsLogged={this.handleIsLogged}
          isLogged={this.state.isLogged}
          data-test="content-component"
        />
      </main>
    );
  }

}

export default Main;