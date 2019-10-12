import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className='navigation'>
      <ul className='navigation__items'>
        <li className='navigation__item'>
          <NavLink exact to='/'>start</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink exact to='/bikes'>bikes</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink exact to='/contact'>contact</NavLink>
        </li>
        <li className='navigation__item'>
          <NavLink exact to='/admin'>admin</NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;