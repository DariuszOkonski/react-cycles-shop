import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter
      data-test="browserRouter-component"
      basename={process.env.PUBLIC_URL}
    >
      <div
        data-test="app-wrapper"
        className="app"
      >
        <Header
          data-test="header-component"
        />
        <Main
          data-test="main-component"
        />
        <Footer
          data-test="footer-component"
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
