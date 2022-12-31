import React from 'react';
import Moon from '../Moon.json';
import Lottie from 'lottie-react';
import Avatar from '../components/Avatar.png'

const About = () => {
  return (
    <div className='about-page'>
    <div id="boarding-container" className="container mt-sm-3 mx-sm-5 mt-md-5 mx-md-5">
      <div id="boarding-pass" className="shadow" >
        <div className="title text-center mt-2">
          <p className="card-title">About Me</p>
        </div>
        <img className='Avatar ms-sm-5 mb-sm-5 mb-5 shadow-lg' src = {Avatar} alt="Jesus' avatar"></img>
        <div className="about-text text-center shadow-lg ">
          <p>I'm a Software Engineer eager and passionate in creating scalable and functional web applications. </p>
        </div>


      </div>

    </div>
    <div id='lottie-bg'>
    <Lottie animationData={Moon} />
    </div>
    </div>
  );
}
export default About;
