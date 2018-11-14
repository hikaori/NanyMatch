import React, { Component } from 'react';
import Slider from 'react-slick';
import NannyItem from '../NonMemberTopContainer/NannyContainer/NannyItem/NannyItem';
import { NFJReviewItem } from '..';
import { nannyDetails } from '../../constants/nannyDetails';
import { nFJReviews } from '../../constants/nFJReviews';
import './SliderContainer.scss';
export default class SliderContainer extends Component {
  slickerDom(param) {
    switch (param) {
      case 'nanny':
        const nannyDom = nannyDetails.map(nannyId => (
          <NannyItem
            key={nannyId.id}
            name={nannyId.name}
            imageUrl={nannyId.imageUrl}
            workExperience={nannyId.workExperience}
            availability={nannyId.availability}
            wage={nannyId.wage}
            comments={nannyId.comments}
            live={nannyId.live}
          />
        ));
        return nannyDom;

      case 'review':
        const reviewDom = nFJReviews.map(x => (
          <NFJReviewItem
            key={x.reviewer}
            reviewer={x.reviewer}
            reviewcomment={x.reviewcomment}
          />
        ));
        return reviewDom;

      default:
        return 'foo';
    }
  }
  render() {
    const { category, slidesToShowNum, slidesToScrollNum } = this.props;
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShowNum,
      slidesToScroll: slidesToScrollNum
    };

    return (
      <div className="SliderContainer">
        <Slider {...settings}>{this.slickerDom(category)}</Slider>
      </div>
    );
  }
}
