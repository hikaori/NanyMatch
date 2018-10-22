import React, { Component, Fragment } from 'react';
import nFJLogoImageUrl from '../../assets/icons/twitter.svg';
// import facebookImageUrl from '../../assets/icons/twitter.svg';
// import twitterImageUrl from '../../assets/icons/twitter.svg';
// import instagramImageUrl from '../../assets/icons/twitter.svg';
// import instagramImageUrl from '../../assets/icons/twitter.svg';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="Footer">
          <div>
            <div>Our Office</div>
            <div>
              Suite 225 – 314 West Cordova Street <br />
              Vancouver, BC, Canada <br />
              V6B 1E8
            </div>
          </div>
          <div>
            <div>Contact Us</div>
            <div>
              Phone:
              <br /> +1 (000) 000-0000
            </div>
            <div>
              E-mail:
              <br /> info@nannyfromjapan.com
            </div>
          </div>
          {/* <img src={nFJLogoImageUrl} alt="Nanny From Japan logo" />
          <div>
            <div>
              <div>
                <img src={facebookImageUrl} alt="Nanny From Japan facebook" />
              </div>
              <div>
                <img src={twitterImageUrl} alt="Nanny From Japan twitter" />
              </div>
              <div>
                <img src={instagramImageUrl} alt="Nanny From Japan instagram" />
              </div>
            </div>
            <div>Proudly Partner With:</div>
            <ul>
              <li>
                <img src={cosLogoImageUrl} alt="Nanny From Japan logo" />
              </li>
              <li>
                <img src={instagramImageUrl} alt="Nanny From Japan logo" />
              </li>
              <li>
                <img src={instagramImageUrl} alt="Nanny From Japan logo" />
              </li>
              <li>
                <img src={instagramImageUrl} alt="Nanny From Japan logo" />
              </li>
            </ul>
            <div>Sitemap</div>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>Find A Nanny</li>
              <li>Find A Family</li>
              <li>How It Works</li>
              <li>Fees</li>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Privacy & Policy</li>
              <li>Sign In</li>
              <li>Sign Up</li>
            </ul>
          </div> */}
          <div />
        </div>
      </Fragment>
    );
  }
}
