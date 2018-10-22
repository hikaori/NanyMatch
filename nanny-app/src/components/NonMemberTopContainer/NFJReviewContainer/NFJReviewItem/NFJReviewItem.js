import React, { Component, Fragment } from 'react';
export default class NFJReviewItem extends Component {
  render() {
    const { reviewer, reviewcomment } = this.props;
    return (
      <Fragment className="NFJReviewItem">
        <div className="NFJReview-comment">
          <div>{reviewcomment}</div>
          <div>{reviewer}</div>
        </div>
      </Fragment>
    );
  }
}
