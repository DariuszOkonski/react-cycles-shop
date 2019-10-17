import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
  const { isLogged } = props;

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
          {isLogged ?
            (<NavLink exact to='/admin'>admin</NavLink>)
            :
            (<NavLink exact to='/login'>login</NavLink>)
          }
        </li>
      </ul>
    </nav>
  );
}

Navigation.propTypes = {
  isLogged: PropTypes.bool.isRequired,
}

export default Navigation;