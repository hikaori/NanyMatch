import React, { Component } from 'react'
import './NaviItem.scss';

export default class NaviItem extends Component{

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
    const { title, childs } = this.props;
    return(
      <div>
        <div className="LowerItem" onMouseOver={this.handleHoverIn} onMouseLeave={this.handleHoverOut}>{ title }</div>
        {
          isHovered && (
            <ul>
              {childs.map((subtitle) => (
                <li key={subtitle} className="subtitle"
                >
                  {subtitle}
                </li>
              ))}
            </ul>
          )
        }
      </div>
    )
  }
}