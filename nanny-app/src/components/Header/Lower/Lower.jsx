import React, { Component } from 'react';
import NaviItem from './NaviItem/NaviItem.jsx';
import { naviItems } from '../../../constants/naviItems.js';
import logo from '../../../assets/icons/NFJLogo_white-comp.svg';
import PropTypes from 'prop-types';

import '../Lower/Lower.scss';

export default class Lower extends Component {
  render() {
    return (
      <div className="Lower">
        <img src={logo} alt="Nanny from japan logo" />
        {naviItems.map(naviItem => (
          <NaviItem
            key={naviItem.title}
            title={naviItem.title}
            subtitles={naviItem.subtitles}
            linkTo={naviItem.linkTo}
          />
        ))}
      </div>
    );
  }
}

Lower.propTypes = {
  NaviItem: PropTypes.object
};
Lower.defaultProps = {
  NaviItem: {}
};
