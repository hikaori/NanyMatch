import React, { Component } from 'react'
import './Header.scss';
import Upper from './Upper/Upper.jsx';

export default class Header extends Component {
  render() {
    return (
      <div className="Header">
        <Upper />
        <div className="Header-lower"></div>
      </div>
    )
  }
}