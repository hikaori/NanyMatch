import React, { Component } from 'react';
import './Upper.scss';
import facebookImage from './../../../assets/icons/facebook.svg';
import twitterImage from './../../../assets/icons/twitter.svg';
import instagram from './../../../assets/icons/instagram.svg';
import search from './../../../assets/icons/search.svg';

export default class Upper extends Component {
  render() {
    return (
      <div className="Upper">
        <div className="Upper-sns-area">
          <ul>
            <li className="Upper-twitterImage">
              <img src={twitterImage} />
            </li>
            <li className="Upper-facebook">
              <img src={facebookImage} />
            </li>
            <li className="Upper-instagram">
              <img src={instagram} />
            </li>
            <li className="Upper-search">
              <img src={search} />
            </li>
          </ul>
        </div>
        <h1 className="Header-site-name">Nanny From Japan</h1>
        <div className="Header-sign-area">
          <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    );
  }
}
