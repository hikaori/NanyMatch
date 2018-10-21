import React, { Component } from 'react'
import Container from '../Container/Container.jsx';
import NannyItem from './NannyItem/NannyItem.jsx';
import { nannyDetails } from '../../constants/nannyDetails.js';
import './TopPage.scss'
export default class TopPage extends Component {
  render() {
    return (
      <Container>
        <div className="TopPage">
          <img src="" alt="" />
          <div className="Top">
            <div>We are Nanny From Japan. We bring you the relief you need, when you need it.</div>
            <button className="">Let's Go Find Your Nanny</button>
          </div>
          <h2>Our Featured Nannies</h2>
          <div className="NannyItemContainer">
            {nannyDetails.map((nannyId)=>(
              <NannyItem 
                key={nannyId.id}
                name={nannyId.name}
                imageUrl={nannyId.imageUrl}
                workExperience={nannyId.workExperience}
                availability={nannyId.availability}
                wage={nannyId.wage}
                comments={nannyId.comments}
                live={nannyId.live}
              />
            ))}
          </div>
        </div>
      </Container>
    )
  }
}