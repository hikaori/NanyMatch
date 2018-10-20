import React, { Component } from 'react'
import '../Lower/Lower.scss'
import NaviItem from './NaviItem/NaviItem.jsx';

export default class Lower extends Component{
  render(){
    return(
      <div>
        <div>Logo</div>
        <ul className="Lower">
          <NaviItem title={ 'About us' } subtitles={ 'children' }/>
          <li>About us</li>
          <li>Faind a nanny</li>
          <li>Faind a family</li>
          <li>How it works</li>
          <li>Fees</li>
          <li>FAQ</li>
          <li>Contact Us</li>
        </ul>
      </div>
    )
  }
}