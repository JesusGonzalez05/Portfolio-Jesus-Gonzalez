import React from 'react';
import Moon from '../Moon.json';
import Lottie from 'lottie-react';
import Avatar from '../components/Avatar.png'

const About = () => {
  return (
    <>
    <div id="boarding-container" className="container mt-md-5 mx-md-5 mt-xs-5 mx-xs-5">
      <div id="boarding-pass" className="" >
        <div className="boarding text-center mt-2">
          <h5 className="card-title">About Me</h5>
          <img className="Avatar" src={Avatar} alt="Jesus' avatar"></img>
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
