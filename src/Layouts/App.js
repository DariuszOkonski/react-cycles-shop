import React from 'react';
import '../css/style.css';
import Header from './Header';

function App() {
  return (
    <div className="app">
      <Header />


      <main className='main'>
        <nav className='navigation'>Navigation</nav>
        <section className='content'>Content</section>
      </main>

      <footer className='footer'>
        Footer
      </footer>

    </div>
  );
}

export default App;
