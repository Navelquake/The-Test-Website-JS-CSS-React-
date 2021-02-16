import React from 'react';
import '../App.css';
import ReactPlayer from 'react-player'
//import { Button } from './Button';
import './HeroSection.css';

function HeroSection2() {
  return (
    <div className='hero-container'>
      <ReactPlayer url="https://www.youtube.com/watch?v=p17LnQp6SBE"/>
      {/*<video src='/videos/video.mp4' autoPlay loop muted />*/}
      <img src='https://i.pinimg.com/originals/02/df/82/02df82fb397210ee69754e20d06e37b9.jpg' alt=''/>
      <h2>Zobacz jak wygląda podróż z nami!</h2>
      
      
        
       
       
      </div>
    
  );
}

export default HeroSection2;