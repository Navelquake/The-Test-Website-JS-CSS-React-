import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import ReactPlayer from "react-player";

function HeroSection() {
  return (
    <div className='hero-container'>
      <audio id="audio" src="../sounds/untitled.mp3"  autoPlay loop/>
      {/*<video src='/videos/video-1.mp4' autoPlay loop muted />*/}
      <img src='https://wallpaperaccess.com/full/488392.jpg' alt='tlo'/>
      <h1>PODRÓŻUJ Z NAMI!</h1>
      <p>Nie pozwól marzeniom czekać!</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          ZACZNIJ
        </Button>
        <Button
          className='btns'
          buttonStyle='btn--primary'
          buttonSize='btn--large'
          onClick={console.log('hey')}
        >
          Zarejestruj się <i className='fas fa-registered' />
        </Button>
        
      </div>
      <ReactPlayer url="https://www.youtube.com/watch?v=EYIIn0s0itA"/>
    </div>
  );
}

export default HeroSection;