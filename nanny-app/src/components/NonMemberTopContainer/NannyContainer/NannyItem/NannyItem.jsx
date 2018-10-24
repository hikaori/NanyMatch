import React, { Component } from 'react';
import { Button } from '../../../';

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
        <img src={imageUrl} alt="ナニープロファイル写真" />
        <div>{name}</div>
        <div>{workExperience}</div>
        <div>{availability}</div>
        <div>{wage}</div>
        <div>{comments}</div>
        <div>{live}</div>
        <Button
          hasBorder={true}
          text={'Learn About This Nanny'}
          toLink={'/about'}
        />
      </div>
    );
  }
}
