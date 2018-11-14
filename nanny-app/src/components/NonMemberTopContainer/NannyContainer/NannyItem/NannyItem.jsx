import React, { Component } from 'react';
import { Button } from '../../../';
import './NannyItem.scss';

export default class TopPage extends Component {
  render() {
    const {
      id,
      name,
      imageUrl,
      workExperience,
      availability,
      wage,
      comments,
      live
    } = this.props;

    return (
      <div className="NannyItem">
        <div className="NannyItem-image">
          <img src={imageUrl} alt="ナニープロファイル写真" />
        </div>
        <div className="NannyItem-details">
          <div className="NannyItem-name">{name}</div>
          <div className="NannyItem-list">{workExperience}</div>
          <div className="NannyItem-list">{availability}</div>
          <div className="NannyItem-list">{wage}</div>
          <div className="NannyItem-comment">{comments}</div>
          <div className="NannyItem-live icon">{live}</div>
        </div>
        <Button
          hasBorder={true}
          isShowly={false}
          text={'Learn About This Nanny'}
          toLink={'/about'}
        />
      </div>
    );
  }
}
