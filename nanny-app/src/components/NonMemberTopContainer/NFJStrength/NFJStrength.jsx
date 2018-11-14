import React, { Component, Fragment } from 'react';
import { nFJStrengths } from '../../../constants/nFJStrengths';
import NFJStrengthItem from './NFJStrengthItem/NFJStrengthItem';
import Button from '../../Button/Button';
import './NFJStrength.scss';

export default class NFJStrength extends Component {
  render() {
    return (
      <div className="NFJStrength">
        <div className="NFJStrength-titles">
          <h2>What Keep Us Lead The Industry</h2>
          <Button
            hasBorder={false}
            text={'Learn More About The Procedures'}
            toLink={'/about'}
            isShowly={true}
          />
        </div>
        <div className="NFJStrength-items">
          {nFJStrengths.map(x => (
            <NFJStrengthItem
              key={x.strength}
              strength={x.strength}
              caption={x.caption}
            />
          ))}
        </div>
      </div>
    );
  }
}
