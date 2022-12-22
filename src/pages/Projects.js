import React from 'react';
// import './Projects.css'


export default function Projects() {
  return (
  <div className='projects-container'>
    <h1 className='projects-title'>Projects</h1>

    <div className='solar-system'>
      {/* nomdaic adventures */}
        <div className='container1'>

          <div className='planet-nomadic'>
            <div className='cloud1'></div>
            <div className='cloud2'></div>
          </div>
          <button className='planet-name1'>
            <h6>Nomadic Adventures</h6>
          </button>

        </div>

        {/* CINEMAfiles */}
        <div className='container2'>
      
          <div className='planet-CINEMA'>
          </div>
          <button className='planet-name2'>
            <h6>CINEMAfiles</h6>
          </button>

        </div>
    </div>
  </div>
  );
}
