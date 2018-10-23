import React, { Component, Fragment } from 'react';
import NFJStrength from './NFJStrength/NFJStrength';
import {
  Header,
  Footer,
  NannyContainer,
  HowItWorks,
  NFJReviewContainer
} from '../';
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
        </div>
        <NannyContainer />
        <NFJStrength />
        <HowItWorks />
        <h2>Who We Are</h2>

        <NFJReviewContainer />

        <Footer />
      </Fragment>
    );
  }
}
