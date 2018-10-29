import React, { Component } from 'react';
import { Button, SliderContainer } from '../../';
import './NannyContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class NannyContainer extends Component {
  render() {
    return (
      <div className="NannyContainer">
        <h2>Our Featured Nannies</h2>
        <div className="NannyContainer-nannyArea">
          <SliderContainer
            category={'nanny'}
            slidesToShowNum={3}
            slidesToScrollNum={3}
          />
        </div>
        <div className="NannyContainer-more">
          <Button
            hasBorder={false}
            isShowly={true}
            text={'Look For More Nannies'}
            toLink={'/about'}
          />
        </div>
      </div>
    );
  }
}
