import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/icons/NFJLogo_white.svg';
import cosLogo from '../../assets/images/companyLogo_COS.png';
import hoikupediaLogo from '../../assets/images/companyLogo_Hoikupedia.png';
import nadeshiko from '../../assets/images/companyLogo_Nadeshiko.png';
import youjiEigo from '../../assets/images/companyLogo_grey_YoujiEigo.png';
import './Footer.scss';

export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        <div className="Footer">
          <div className="coInfo">
            <div>
              <div className="title">Our Office</div>
              <div>
                Suite 225 – 314 West Cordova Street <br />
                Vancouver, BC, Canada <br />
                V6B 1E8
              </div>
            </div>
            <div>
              <div className="title contact">Contact Us</div>
              <div>
                Phone:
                <br /> +1 (000) 000-0000
              </div>
              <div>
                E-mail:
                <br /> info@nannyfromjapan.com
              </div>
            </div>
          </div>
          <div className="partnership">
            <img src={logo} alt="Nanny From Japan logo" />
            <div className="coName">Nanny From Japan</div>
            <div className="sns">
              <div className="facebookIcon" />
              <div className="twitter" />
              <div className="instagram" />
            </div>
            <div>Proudly Partner With:</div>
            <ul>
              <li>
                <a href="//cosvancouver.com/">
                  <img src={cosLogo} alt="COS Educational Consulting Inc" />
                </a>
              </li>
              <li>
                <a href="//ryugaku.hoikupedia.com/">
                  <img src={hoikupediaLogo} alt="hoikupedia" />
                </a>
              </li>
              <li>
                <a href="//nadeshikoryugaku.com/">
                  <img src={nadeshiko} alt="nadeshiko" />
                </a>
              </li>
              <li>
                <a href="//youjieigo.com/">
                  <img src={youjiEigo} alt="youjiEigo" />
                </a>
              </li>
            </ul>
          </div>
          <div className="sitemap">
            <div className="title">Sitemap</div>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About Us</Link>
              </li>
              <li>
                <Link to="/findNanny">Find A Nanny</Link>
              </li>
              <li>
                <Link to="/findFamily">Find A Family</Link>
              </li>
              <li>
                <Link to="/howItWorks">How It Works</Link>
              </li>
              <li>
                <Link to="/fees">Fees</Link>
              </li>
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li>
                <Link to="/contact">Contact Us</Link>
              </li>
              <li>
                <Link to="/privacy">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/signIn">Sign In</Link>
              </li>
              <li>
                <Link to="/signUp">Sign Up</Link>
              </li>
            </ul>
          </div>
        </div>
      </Fragment>
    );
  }
}
