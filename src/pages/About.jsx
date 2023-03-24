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
        <div className='text-icons'>
          <div className="about-text text-center shadow-lg ">
            <p> Hi, I'm Jesus Gonzalez a web developer with experience in operational oranization and productivity. I am certified in Full Stack Web Development from the University of Central Florida. Whether I am working on bettering operational metrics or building an application, my passion lies in collabrative creativity and problem solving.</p>
          </div>
          <div className='icons text-center shadow-lg'>
            <i id="Devicon" className="devicon-mongodb-plain-wordmark"></i>
            <i id="Devicon" className="devicon-express-original colored"></i>
            <i id="Devicon" className="devicon-react-original-wordmark"></i>
            <i id="Devicon" className="devicon-nodejs-plain"></i>
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
