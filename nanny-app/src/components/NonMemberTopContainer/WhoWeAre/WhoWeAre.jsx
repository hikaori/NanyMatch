import React, { Component } from 'react';
import { Button } from '../../';
import NfjTeamPhotoUrl from '../../../assets/images/nfjTeamPhoto.jpg';
import './WhoWeAre.scss';
export default class WhoWeAre extends Component {
  render() {
    return (
      <div className="WhoWeAre">
        <h2>Who We Are</h2>
        <p>
          We are a Japanese company founded in 2011, based in Vancouver, Osaka,
          and Nagoya. We operate as a licensed educational, employment
          arrangement company, and also as an immigration compnay. We have
          recruited over 400 ECE students and workers from Japan, who will be
          great candidates to become a nanny at your home. We localize our
          businesses in Vancouver, and are hoping to become the most reliable
          nanny placement organization around.
        </p>
        <img
          className="img"
          src={NfjTeamPhotoUrl}
          alt="Nanny From Japan TeamPhoto"
        />

        <Button
          hasBorder={false}
          isShowly={true}
          text={'Learn More About Us'}
          toLink={'/about'}
        />
      </div>
    );
  }
}
