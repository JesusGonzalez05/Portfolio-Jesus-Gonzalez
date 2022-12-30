import React from 'react';
import Moon from '../Moon.json';
import Lottie from 'lottie-react';


const About = () => {
  return (
    <>
    <div id="about-container" className="container mt-md-5 mx-md-5 mt-xs-5 mx-xs-5">
      <div id="about-me" className="card" >
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
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
