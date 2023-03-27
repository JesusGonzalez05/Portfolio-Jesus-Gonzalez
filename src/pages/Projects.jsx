import React from 'react';
import Slider from "react-slick";

// project photos
import Paws1 from '../components/Paws1.png';
import Paws2 from '../components/Paws2.png';
import Paws3 from '../components/Paws3.png';
import Paws4 from '../components/Paws4.png';
import Paws5 from '../components/Paws5.png';

import Cin1 from '../components/Cin1.png';
import Cin2 from '../components/Cin2.png';
import Cin3 from '../components/Cin3.png';


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

    <div className='mt-4 text-center links'>
      <a target="_blank" rel='noreferrer' className='btn btn-outline-light' href="https://only-paws.herokuapp.com/">Deployed site</a>
      <a target="_blank" rel='noreferrer' className='btn btn-outline-light' href="https://github.com/JesusGonzalez05/only-paws">Repo</a>
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
    <div className='project-preview-container'>
    <Slider className='slider' {...settings}>
        <img src={Cin1} alt="Trulli"></img>
        <img src={Cin2} alt="Trulli"></img>
        <img src={Cin3} alt="Trulli"></img>
    </Slider>
    </div>

    <div className='mt-4 text-center links'>
      <a target="_blank" rel='noreferrer' className='btn btn-outline-light' href="https://cinemafiles-by-cinemaphiles.herokuapp.com/">Deployed site</a>
      <a target="_blank" rel='noreferrer' className='btn btn-outline-light' href="https://github.com/sangki810/Project-2-The-Cinemaphiles">Repo</a>
    </div>
    
    <div className='project-about-container is-size-7 p-2 has-text-centered'>
    CINEMAfiles utilizes Node.js and Express.js to create a RESTful API which is stored in a database using MySQL and the Sequelize ORM. The folder structure meets the MVC paradigm and uses Handlebars.js as the templating engine.
    </div>

    <div className='project-language-container p-2'>
    <i id="Devicon" className="devicon-sequelize-plain"></i>
    <i id="Devicon" className="devicon-express-original colored"></i>
    <i id="Devicon" className="devicon-handlebars-plain-wordmark colored"></i>
    <i id="Devicon" className="devicon-javascript-plain"></i>    
    </div>
  </div>
</div>
  );
}
