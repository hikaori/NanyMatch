import React, { Component, Fragment } from 'react';
import { Button } from '../../../index';
import './HowItWorksItem.scss';
export default class HowItWorksItem extends Component {
  render() {
    const { title, imageUrl, buttonText } = this.props;
    return (
      <div className="HowItWorksItem">
        <span>
          <span className="HowItWorksItem-Num" />
        </span>
        <section>
          <h3>{title}</h3>
          <img src={imageUrl} alt={title} />
          {buttonText && (
            <Button
              hasBorder={false}
              isShowly={false}
              text={buttonText}
              toLink={'/about'}
            />
          )}
        </section>
      </div>
    );
  }
}
