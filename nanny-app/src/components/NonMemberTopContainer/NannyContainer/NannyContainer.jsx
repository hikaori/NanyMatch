import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import NannyItem from './NannyItem/NannyItem';
import { nannyDetails } from '../../../constants/nannyDetails';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default class TopPage extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3
    };
    return (
      <Fragment>
        <h2>Our Featured Nannies</h2>
        <div className="NannyItemContainer">
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
        <button>Look For More Nannies</button>
      </Fragment>
    );
  }
}
