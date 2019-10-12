import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import '../css/style.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div className="app">
        <Header />
        <Main />

        <footer className='footer'>
          Footer
      </footer>

      </div>
    </BrowserRouter>
  );
}

export default App;
