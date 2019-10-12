import React from 'react';
import { Route, Switch } from 'react-router-dom';
import header1 from '../img/header/header1.jpg';
import header2 from '../img/header/header2.jpg';
import header3 from '../img/header/header3.jpg';
import header4 from '../img/header/header4.jpg';
import header5 from '../img/header/header5.jpg';
import header6 from '../img/header/header6.jpg';
import header7 from '../img/header/header7.jpg';
import header8 from '../img/header/header8.jpg';
import header9 from '../img/header/header9.jpg';
import header10 from '../img/header/header10.jpg';

const headers = [header1, header2, header3, header4, header5, header6, header7, header8, header9, header10];

const Header = () => {
  const currentImage = () => headers[Math.floor(Math.random() * headers.length)];

  return (
    <header className='header'>
      {/* <img src={header1} alt="header" className="header__image" /> */}
      <Switch>
        <Route exact path='/' render={() => <img src={currentImage()} alt="header" className="header__image" />} />
        <Route path='/bikes' render={() => <img src={currentImage()} alt="header" className="header__image" />} />
        <Route path='/contact' render={() => <img src={currentImage()} alt="header" className="header__image" />} />
        <Route path='/admin' render={() => <img src={currentImage()} alt="header" className="header__image" />} />
        <Route render={() => <img src={currentImage()} alt="header" className="header__image" />} />
      </Switch>
    </header>
  );
}

export default Header;