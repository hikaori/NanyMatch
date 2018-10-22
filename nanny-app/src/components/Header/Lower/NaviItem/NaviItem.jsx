import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './NaviItem.scss';
import PropTypes from 'prop-types';

export default class NaviItem extends Component {
  state = {
    isHovered: false
  };

  handleHoverIn = () => {
    this.setState({
      isHovered: true
    });
  };

  handleHoverOut = () => {
    this.setState({
      isHovered: false
    });
  };

  render() {
    const { isHovered } = this.state;
    const { title, subtitles, linkTo } = this.props;
    return (
      <div>
        <div
          className="LowerItem"
          onMouseOver={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          <Link to={linkTo}> {title} </Link>
        </div>
        {isHovered && (
          <ul>
            {subtitles.map(title => (
              <li key={title} className="subtitle">
                {title}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }
}

NaviItem.propTypes = {
  title: PropTypes.string,
  subtitles: PropTypes.array
};

NaviItem.defaultProps = {
  title: '',
  subtitles: []
};
