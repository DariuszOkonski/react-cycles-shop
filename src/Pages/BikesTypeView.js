import React from 'react';
import { Link } from 'react-router-dom';
import bikes from '../json/bikes';


const BikesTypeView = (props) => {
  const specificBikes = bikes.filter(bike => bike.type === props.match.params.type);

  return (
    <div>
      <h1>{props.match.params.type}</h1>
      <ul>
        {specificBikes.map(bike => <li key={bike.id}>
          <Link to={`/product/${props.match.params.type}/${bike.make}`}>{bike.make}</Link>
        </li>)}
      </ul>
      <br />
      <Link to='/bikes'>Back to Bikes</Link>
    </div>
  );
}

export default BikesTypeView;