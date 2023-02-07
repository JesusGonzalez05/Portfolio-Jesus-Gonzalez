import React from 'react';
import pdf from '../Jesus-Gonzalez-CS-Resume.pdf';


export default function Resume() {
  return (
    <>
      <div className="resume-container text-center">
        <p id="resume-title">Resume</p>
        <div id="resume" className='shadow-lg'>
          <embed src={pdf} type="application/pdf"/>
        </div>
      </div>
    </>
  );
}