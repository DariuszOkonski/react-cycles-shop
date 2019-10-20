import React from 'react';
import { Link } from 'react-router-dom';
import types from '../json/bikes';

const BikesPage = () => {

  const typeList = types.map(type => type.type);
  const uniqueTypes = typeList.filter((item, pos) => typeList.indexOf(item) === pos);

  return (
    <div className="bikes-page">
      <h2 className="bikes-page__header">List of Bikes</h2>
      <ul className="bikes-page__items">
        {uniqueTypes.map(item =>
          <li
            className="bikes-page__item"
            key={item}
          >
            <Link
              className="bikes-page__link"
              to={`/products/${item}`}
            >{item}</Link>
          </li>)}
      </ul>
    </div>
  );
}

export default BikesPage;