import React from 'react';
import header1 from '../img/header/header1.jpg';

const Header = () => {
  return (
    <header className='header'>
      <img src={header1} alt="header" className="header__image" />
    </header>
  );
}

export default Header;