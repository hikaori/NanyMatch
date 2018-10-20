import React, { Component } from 'react'
import './LowerItem.scss';

export default class LowerItem extends Component{

  state = {
    isHovered: false,
  }
  
  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  }

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  }

  render(){
    const { isHovered } = this.state;
    const { title , subtitles } = this.props;
    return(
      <div>
        <div className="LowerItem" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>{ title }</div>
        {
          isHovered && (
            <ul>
              <li>{ subtitles }</li>
              <li>ItemSubtitle</li>
              <li>ItemSubtitle</li>
            </ul>
          )
        }
      </div>
    )
  }
}