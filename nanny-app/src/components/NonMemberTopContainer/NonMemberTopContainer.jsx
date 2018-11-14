import React, { Component, Fragment } from 'react';
import NFJStrength from './NFJStrength/NFJStrength';
import {
  Header,
  Footer,
  NannyContainer,
  HowItWorks,
  WhoWeAer,
  NFJReviewContainer
} from '../';
// index を読み込む時は省略できる。import { Header, Footer } from '../index'
import './NonMemberTopContainer.scss';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Button from '../Button/Button';
export default class NonMemberTopContainer extends Component {
  render() {
    return (
      <Fragment>
        <Header />
        <div className="NonMemberTopContainer">
          <div className="NonMemberTopContainer-hero">
            <div className="NonMemberTopContainer-copyContainer">
              <div className="NonMemberTopContainer-copy">
                We are Nanny From Japan.
                <br /> We bring you the relief you need,
                <br /> when you need it.
              </div>
              <Button
                hasBorder={false}
                isshowly={false}
                text={'Let’s Go Find Your Nanny'}
                toLink={'/about'}
              />
            </div>
          </div>
          <NannyContainer />
          <NFJStrength />
          <HowItWorks />
          <WhoWeAer />
          <NFJReviewContainer />
        </div>
        <Footer />
      </Fragment>
    );
  }
}
