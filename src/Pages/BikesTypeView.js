import React from 'react';
import { Link } from 'react-router-dom';
import bikes from '../json/bikes';


const BikesTypeView = (props) => {
  const specificBikes = bikes.filter(bike => bike.type === props.match.params.type);

  return (
    <div className="bikes-type-view">
      <h2 className="bikes-type-view__header">{props.match.params.type}</h2>
      <ul className="bikes-type-view__items">
        {specificBikes.map(bike =>
          <li className="bikes-type-view__item" key={bike.id}>
            <Link
              className="bikes-type-view__link"
              to={`/product/${props.match.params.type}/${bike.make}`}
            >{bike.make}</Link>
          </li>)}
      </ul>
      <br />
      <Link className="bikes-type-view__btn" to='/bikes'>Back to Bikes</Link>
    </div>
  );
}

export default BikesTypeView;