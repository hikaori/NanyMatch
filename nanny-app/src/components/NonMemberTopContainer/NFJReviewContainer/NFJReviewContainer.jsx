import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import { nFJReviews } from '../../../constants/nFJReviews';
import { NFJReviewItem } from '../../';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
export default class TopPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <Fragment>
        <h2>Voices We’ve Received</h2>
        <Slider {...settings}>
          {nFJReviews.map(x => (
            <NFJReviewItem
              key={x.reviewer}
              reviewer={x.reviewer}
              reviewcomment={x.reviewcomment}
            />
          ))}
        </Slider>
      </Fragment>
    );
  }
}
