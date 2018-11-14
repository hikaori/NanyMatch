import React, { Component } from 'react';
import Container from '../Container/Container.jsx';
import Slider from 'react-slick';
import NannyItem from './NannyItem/NannyItem.jsx';
import { nannyDetails } from '../../constants/nannyDetails.js';
import './TopPage.scss';
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

    return <Container />;
  }
}
