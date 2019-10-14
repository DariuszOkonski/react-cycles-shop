import React from 'react';
import Navigation from './Navigation';
import Content from './Content';

const Main = () => {
  return (
    <main data-test="main-wrapper" className='main'>
      <Navigation data-test="navigation-component" />
      <Content data-test="content-component" />
    </main>
  );
}

export default Main;