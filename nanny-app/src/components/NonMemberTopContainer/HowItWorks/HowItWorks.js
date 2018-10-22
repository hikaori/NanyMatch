import React, { Component, Fragment } from 'react';
import { HowItWorksItem } from '../../index';
import { howItWorksItems } from '../../../constants/howItWorksItems';
export default class NFJStrength extends Component {
  render() {
    return (
      <Fragment>
        <div>
          <h3>How It All Works</h3>
          <p>
            You’ll find exactly the nanny you need in 4 simple steps, and we’re
            always here to help you out!
          </p>
          <button>Learn More About The Procedures</button>
        </div>
        {howItWorksItems.map(x => (
          <HowItWorksItem
            key={x.title}
            title={x.title}
            imageUrl={x.imageUrl}
            buttonText={x.buttonText}
          />
        ))}
        <h3>You’re All Set</h3>
      </Fragment>
    );
  }
}
