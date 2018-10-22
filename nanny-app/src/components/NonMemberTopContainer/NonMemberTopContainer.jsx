import React, { Component, Fragment } from 'react';
import Slider from 'react-slick';
import NannyItem from './NannyItem/NannyItem.jsx';
import NFJStrength from './NFJStrength/NFJStrength';
import { nannyDetails } from '../../constants/nannyDetails.js';
import { Header, Footer, HowItWorks } from '../';
// index を読み込む時は省略できる。import { Header, Footer } from '../index'
import './NonMemberTopContainer.scss';
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
    const texts = [
      { text: 'aaa' },
      { text: 'bbb' },
      { text: 'ccc' },
      { text: 'ddd' },
      { text: 'eee' }
    ];

    return (
      <Fragment>
        <Header />
        <div className="TopPage">
          <img src="" alt="" />
          <div className="Top">
            <div>
              We are Nanny From Japan. We bring you the relief you need, when
              you need it.
            </div>
            <button className="">Let's Go Find Your Nanny</button>
          </div>
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
        </div>
        <NFJStrength />
        <HowItWorks />
        <Footer />
      </Fragment>
    );
  }
}
