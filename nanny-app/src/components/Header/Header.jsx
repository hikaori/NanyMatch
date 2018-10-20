import React, { Component } from 'react'
import './Header.scss';
import Upper from './Upper/Upper.jsx';
import Lower from './Lower/Lower';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Upper />
        <Lower />
        <div className="Header-lower"></div>
      </div>
    )
  }
}