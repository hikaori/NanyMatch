import React, { Component } from 'react';
import { SliderContainer } from '../../';
import './NFJReviewContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class TopPage extends Component {
  render() {
    return (
      <div className="NFJReviewContainer">
        <h2>Voices We’ve Received</h2>
        <SliderContainer
          category={'review'}
          slidesToShowNum={1}
          slidesToScrollNum={1}
        />
      </div>
    );
  }
}
