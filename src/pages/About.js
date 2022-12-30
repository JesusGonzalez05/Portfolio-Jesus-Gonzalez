import React from 'react';
import Moon from '../Moon.json';
import Lottie from 'lottie-react';


const About = () => {
  return (
    <>
    <div id="boarding-container" className="container mt-md-5 mx-md-5 mt-xs-5 mx-xs-5">
      <div id="boarding-pass" className="card" >
        <div className="boarding text-center mt-2">
          <h5 className="card-title">Boarding Pass</h5>
        </div>

          <div className="planets-name">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> quick example.</p>
          </div>

          <div className="">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> quick example.</p>
          </div>

          <div className="about-me">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> quick example.</p>
          </div>
          <div className="skills">
            <h5 className="card-title">Card title</h5>
            <p className="card-text"> quick example.</p>
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
