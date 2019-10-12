import React from 'react';
import Navigation from './Navigation';

const Main = () => {
  return (
    <main className='main'>
      <Navigation />
      <section className='content'>Content</section>
    </main>
  );
}

export default Main;