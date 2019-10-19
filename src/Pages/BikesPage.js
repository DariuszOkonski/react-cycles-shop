import React from 'react';
import { Link } from 'react-router-dom';
import types from '../json/bikes';

const BikesPage = () => {

  const typeList = types.map(type => type.type);
  const uniqueTypes = typeList.filter((item, pos) => typeList.indexOf(item) === pos);

  return (
    <div>
      <h1>List of bikes</h1>
      <ul>
        {uniqueTypes.map(item => <li key={item}>
          <Link to={`/products/${item}`}>{item}</Link>
        </li>)}
      </ul>
    </div>
  );
}

export default BikesPage;