import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import bikes from '../json/bikes'

class SingleBikeView extends Component {
  state = {
    bike: '',
  }

  componentDidMount() {
    const bike = bikes.find(item => item.type === this.props.match.params.type && item.make === this.props.match.params.make);

    this.setState({
      bike
    });

  }

  render() {
    return (
      <div className="single-bike-view">
        <h2 className="single-bike-view__header">Make: {this.state.bike.make}</h2>
        <h2 className="single-bike-view__header">Type: {this.state.bike.type}</h2>
        <p className="single-bike-view__paragraph">{this.state.bike.description}</p>
        <p className="single-bike-view__paragraph">{this.state.bike.price}</p>
        <div className="single-bike-view__img">
          <img src={this.state.bike.img} alt="" />
        </div>
        <Link className="single-bike-view__btn" to={`/products/${this.props.match.params.type}`}>{`Back to ${this.props.match.params.type}`}</Link>
      </div>
    );
  }
}

export default SingleBikeView;