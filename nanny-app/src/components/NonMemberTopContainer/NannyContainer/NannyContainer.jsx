import React, { Component } from 'react';
import Slider from 'react-slick';
import NannyItem from './NannyItem/NannyItem';
import { Button } from '../../';
import { nannyDetails } from '../../../constants/nannyDetails';
import './NannyContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class NannyContainer extends Component {
  render() {
    const settings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <div className="NannyItemContainer">
        <h2>Our Featured Nannies</h2>
        <div className="NannyItemContainer-nannyArea">
          <Slider {...settings}>
            {nannyDetails.map(nannyId => (
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
            ))}
          </Slider>
        </div>
        <div className="NannyItemContainer-more">
          <Button
            hasBorder={false}
            text={'Look For More Nannies'}
            toLink={'/about'}
            isShowly={true}
          />
        </div>
      </div>
    );
  }
}
