import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    let button;
    const { hasBorder, text, toLink } = this.props;
    if (hasBorder) {
      button = <button className="buttonLine">{text}</button>;
    } else {
      button = <button className="baseButton">{text}</button>;
    }
    return <Link to={toLink}>{button}</Link>;
  }
}
