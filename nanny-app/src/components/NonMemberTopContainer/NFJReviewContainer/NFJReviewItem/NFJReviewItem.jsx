import React, { Component, Fragment } from 'react';
import './NFJReviewItem.scss';
export default class NFJReviewItem extends Component {
  render() {
    const { reviewer, reviewcomment } = this.props;
    return (
      <Fragment>
        <div className="NFJReviewItem">
          <div className="comment">{reviewcomment}</div>
          <div className="reviewer">{reviewer}</div>
        </div>
      </Fragment>
    );
  }
}
