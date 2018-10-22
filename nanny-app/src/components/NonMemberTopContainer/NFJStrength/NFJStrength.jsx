import React, { Component, Fragment } from 'react';
import { nFJStrengths } from '../../../constants/nFJStrengths';
import NFJStrengthItem from './NFJStrengthItem/NFJStrengthItem';

export default class NFJStrength extends Component {
  render() {
    return (
      <Fragment>
        {nFJStrengths.map(x => (
          <NFJStrengthItem
            key={x.strength}
            strength={x.strength}
            caption={x.caption}
          />
        ))}
        <h2>What Keep Us Lead The Industry</h2>
        <button>Learn More About Our Nannies</button>
      </Fragment>
    );
  }
}
