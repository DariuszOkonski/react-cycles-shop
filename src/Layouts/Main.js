import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const Main = () => {
  return (
    <main className='main'>
      <Navigation />
      <Content />
    </main>
  );
}

export default Main;