import React from 'react';
import Moon from '../Moon.json';
import Lottie from 'lottie-react';
import Avatar from '../components/Avatar.png'

const About = () => {
  return (
    <>
    <div id="boarding-container" className="container mt-sm-3 mx-sm-5 mt-md-5 mx-md-5">
      <div id="boarding-pass" className="shadow" >
        <div className="title text-center mt-2">
          <p className="card-title">About Me</p>
        </div>
        <img className='Avatar ms-sm-5 mb-sm-5 mb-5 shadow-lg' src = {Avatar} alt="Jesus' avatar"></img>
        {/* <div className="about-text text-center shadow-lg ">
          <p>I'm a Software Engineer eager and passionate in create scalable and functional web applications. </p>
        </div>
        <div className='icons'>
          <i id="Devicon" class=" devicon-mongodb-plain-wordmark"></i>
          <i id="Devicon" class=" devicon-express-original-wordmark"></i>
          <i id="Devicon" class=" devicon-react-original-wordmark"></i>
          <i id="Devicon" class=" devicon-nodejs-plain-wordmark"></i>
        </div> */}
        <div className='text-icons'>
          <div className="about-text text-center shadow-lg ">
            <p>I'm a Software Engineer eager and passionate in create scalable and functional web applications. </p>
          </div>
          <div className='icons'>
            <i id="Devicon" class=" devicon-mongodb-plain-wordmark"></i>
            <i id="Devicon" class=" devicon-express-original-wordmark"></i>
            <i id="Devicon" class=" devicon-react-original-wordmark"></i>
            <i id="Devicon" class=" devicon-nodejs-plain-wordmark"></i>
          </div>
        </div>
      </div>

    </div>
    <div id='lottie-bg'>
    <Lottie animationData={Moon} />
    </div>
    </>
  );
}
export default About;
