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
            <li className="icon Upper-twitter" />
            <li className="icon Upper-facebook" />
            <li className="icon Upper-instagram" />
            <li className="icon Upper-search" />
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
