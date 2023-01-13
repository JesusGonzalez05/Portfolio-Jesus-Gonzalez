import React from 'react';
import Slider from "react-slick";

// project photos
import Paws1 from '../components/Paws1.png';
import Paws2 from '../components/Paws2.png';
import Paws3 from '../components/Paws3.png';
import Paws4 from '../components/Paws4.png';
import Paws5 from '../components/Paws5.png';


export default function Projects() {

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };

  return (
<div className='project-page'>

  <div id="project-container" className="" >
    <div className='project-preview-container'>
      <Slider className='slider' {...settings}>
        <img src={Paws1} alt="Trulli"></img>

        <img src={Paws2} alt="Trulli"></img>

        <img src={Paws3} alt="Trulli"></img>

        <img src={Paws4} alt="Trulli"></img>

        <img src={Paws5} alt="Trulli"></img>

      </Slider>
    </div>
    <div className='project-about-container is-size-7 p-2 has-text-centered'>
      OnlyPaws is a full-stack web application built using the MERN stack (MongoDB, Express, React, and Node.js) and following the MVC (Model-View-Controller) pattern.
    </div>
    <div className='project-language-container p-2'>
            <i id="Devicon" className="devicon-mongodb-plain-wordmark"></i>
            <i id="Devicon" className="devicon-express-original colored"></i>
            <i id="Devicon" className="devicon-react-original-wordmark"></i>
            <i id="Devicon" className="devicon-nodejs-plain"></i>
    </div>
  </div>

  <div id="project-container" className="" >
    <div className='project-preview-container'></div>
    <div className='project-about-container'></div>
    <div className='project-language-container'></div>
  </div>

  <div id="project-container" className="" >
    <div className='project-preview-container'></div>
    <div className='project-about-container'></div>
    <div className='project-language-container'></div>
  </div>

</div>
  );
}
