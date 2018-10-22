import React, { Component, Fragment } from 'react';

export default class NFJStrengthItem extends Component {
  render() {
    const { strength, caption } = this.props;
    return (
      <Fragment classNme="NFJStrengthItem">
        <h3>{strength}</h3>
        <p>{caption}</p>
      </Fragment>
    );
  }
}
