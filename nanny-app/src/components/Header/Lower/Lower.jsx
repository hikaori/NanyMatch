import React, { Component } from 'react'
import '../Lower/LowerItem.scss'
import LowerItem from './LowerItem/LowerItem';

export default class Lower extends Component{
  render(){
    return(
      <div>
        <div>Logo</div>
        <ul className="Lower">
          <LowerItem title={ 'About us' } subtitles={ 'children' }/>
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