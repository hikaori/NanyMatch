import React, { Component } from 'react'
import './Upper.scss'
import twitterImage from './../../../assets/icons/twitter.svg'
import facebookImage from './../../../assets/icons/facebook.svg'

export default class Upper extends Component {
  render() {
    return (
      <div className="Header-upper">
        <div className="Header-sns-area">
          <ul>
            <li><img src={twitterImage} /></li>
            <li><img src={facebookImage} /></li>
            <li></li>
            <li></li>
          </ul>
        </div>
        <div className="Header-site-name">Nanny From Japan</div>
        <div className="Header-sign-area">
          <ul>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
      </div>
    )
  }
}