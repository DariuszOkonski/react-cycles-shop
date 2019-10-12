import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/style.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Main />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
