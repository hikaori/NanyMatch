import React, { Component, Fragment } from 'react';
import { SliderContainer } from '../../';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class TopPage extends Component {
  render() {
    return (
      <Fragment>
        <h2>Voices We’ve Received</h2>
        <SliderContainer
          category={'review'}
          slidesToShowNum={1}
          slidesToScrollNum={1}
        />
      </Fragment>
    );
  }
}
