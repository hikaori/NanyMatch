import React, { Component, Fragment } from 'react';
import { HowItWorksItem, Button } from '../../index';
import { howItWorksItems } from '../../../constants/howItWorksItems';
import './HowItWorks.scss';
export default class NFJStrength extends Component {
  render() {
    return (
      <div className="HowItWorks">
        <div className="HowItWorks-titles">
          <div>
            <h3>How It All Works</h3>
            <p>
              You’ll find exactly the nanny you need in 4 simple steps, and
              we’re always here to help you out!
            </p>
            <Button
              hasBorder={false}
              isShowly={true}
              text={'Learn More About The Procedures'}
              toLink={'/about'}
            />
          </div>
        </div>
        <div className="HowItWorks-items">
          {howItWorksItems.map(x => (
            <HowItWorksItem
              key={x.title}
              title={x.title}
              imageUrl={x.imageUrl}
              buttonText={x.buttonText}
            />
          ))}
          <div className="HowItWorksItem">
            <span>
              <span className="HowItWorksItem-Num" />
            </span>
            <h3>You’re All Set</h3>
          </div>
        </div>
      </div>
    );
  }
}
