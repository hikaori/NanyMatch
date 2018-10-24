import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class Button extends Component {
  render() {
    let button;
    const { hasBorder, text, toLink, isShowly } = this.props;
    if (!hasBorder && !isShowly) {
      button = <button className="button">{text}</button>;
    }
    if (!hasBorder && isShowly) {
      button = <button className="button-showly">{text}</button>;
    } else {
      button = <button className="button-line">{text}</button>;
    }
    return <Link to={toLink}>{button}</Link>;
  }
}
