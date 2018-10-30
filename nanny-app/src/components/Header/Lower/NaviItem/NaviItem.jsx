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
      <div className="NaviItem">
        <div
          onMouseOver={this.handleHoverIn}
          onMouseLeave={this.handleHoverOut}
        >
          <div className="NaviItem-title">
            <Link to={linkTo}>{title}</Link>
          </div>
          <div>
            {isHovered === true &&
              subtitles.length > 0 && (
                <ul className="NaviItem-subtitles">
                  {subtitles.map(({ title, linkTo }) => (
                    <li key={title} className="subtitle">
                      <Link to={linkTo}> {title} </Link>
                    </li>
                  ))}
                </ul>
              )}
          </div>
        </div>
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
