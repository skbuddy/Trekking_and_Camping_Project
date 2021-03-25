import React from 'react';
import '../App.css'
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
    return (
        <div className='hero-container'>
            <video src='/videos/video-1.mp4' autoPlay muted loop/>
            <h1>Adventure Awaits</h1>
            <p>What are you waiting for?</p>
            <div className='hero-btns'>
                <Button 
                className="btns"
                buttonStyle='btn--outline'
                buttonSize='btn--large'>
                    BOOK ROOMS
                </Button>
                <Button 
                className="btns"
                buttonStyle='btn--primary'
                buttonSize='btn--large'>
                    CHECKOUT SERVICES  <i className='fa fa-play-circle'/>
                </Button>
            </div>
            
        </div>
    )
}

export default HeroSection;
