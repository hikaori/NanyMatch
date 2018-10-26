import React, { Component, Fragment } from 'react';
import './NFJStrengthItem.scss';

export default class NFJStrengthItem extends Component {
  render() {
    const { strength, caption } = this.props;
    return (
      <div className="NFJStrengthItem">
        <h3>{strength}</h3>
        <p>{caption}</p>
      </div>
    );
  }
}
