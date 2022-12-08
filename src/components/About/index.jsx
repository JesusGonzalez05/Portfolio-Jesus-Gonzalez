import React from 'react';
import './About.css'

export default function About() {
  return (
    <div className='about-me-page'>
      <div className='about-title-container'>
        <h1 className='about-title'>About Me</h1>
      </div>

      <div className='about-me-container'>

        <div className='about-me'>
        </div>
        
        {/* moon */}
        <div className='moon-container'>
          <div className='moon'>
            <div className='hole1'></div>
            <div className='hole2'></div>
            <div className='hole3'></div>
            <div className='hole4'></div>
            <div className='hole5'></div>
            <div className='hole6'></div>

          </div>
        </div>

      </div>


    </div>
  );
}
