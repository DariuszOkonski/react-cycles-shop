import React from 'react';
import '../css/style.css';
import Header from './Header';
import Main from './Main';

function App() {
  return (
    <div className="app">
      <Header />
      <Main />

      <footer className='footer'>
        Footer
      </footer>

    </div>
  );
}

export default App;
