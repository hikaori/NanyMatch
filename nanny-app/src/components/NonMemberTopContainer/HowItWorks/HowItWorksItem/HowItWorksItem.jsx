import React, { Component, Fragment } from 'react';
export default class HowItWorksItem extends Component {
  render() {
    const { title, imageUrl, buttonText } = this.props;
    return (
      <Fragment>
        <h3>{title}</h3>
        <img src={imageUrl} alt={title} />
        {buttonText && <button>{buttonText}</button>}
      </Fragment>
    );
  }
}
