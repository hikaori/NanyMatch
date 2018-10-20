import React, { Component } from 'react'
import NaviItem from './NaviItem/NaviItem.jsx';
import { naviItems } from '../../../constants/naviItems.js';

import '../Lower/Lower.scss'


export default class Lower extends Component{
  render(){
    return(
      <div>
        <div>Logo</div>
        <div className="NaviItems">
          {naviItems.map((naviItem) => (
              <NaviItem
                key={naviItem.title}
                title={naviItem.title}
                subtitles={naviItem.subtitles}
              />
            ))}
          </div>
      </div>
    )
  }
}