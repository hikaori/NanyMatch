import React, { Component } from 'react';
import NaviItem from './NaviItem/NaviItem.jsx';
import { naviItems } from '../../../constants/naviItems.js';
import PropTypes from 'prop-types';

import '../Lower/Lower.scss';

export default class Lower extends Component {
  render() {
    return (
      <div>
        <div>Logo</div>
        <div className="NaviItems">
          {naviItems.map(naviItem => (
            <NaviItem
              key={naviItem.title}
              title={naviItem.title}
              subtitles={naviItem.subtitles}
              linkTo={naviItem.linkTo}
            />
          ))}
        </div>
      </div>
    );
  }
}

Lower.propTypes = {
  NaviItem: PropTypes.object.isRequired
};
