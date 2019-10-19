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
      <div>
        <h1>{this.state.bike.make}</h1>
        <h2>{this.state.bike.type}</h2>
        <p>{this.state.bike.description}</p>
        <p>{this.state.bike.price}</p>
        <div style={{ width: '300px' }}>
          <img style={{ width: '100%' }} src={this.state.bike.img} alt="" />
        </div>
        <br />
        <Link to={`/products/${this.props.match.params.type}`}>{`Back to ${this.props.match.params.type}`}</Link>
      </div>
    );
  }
}

export default SingleBikeView;