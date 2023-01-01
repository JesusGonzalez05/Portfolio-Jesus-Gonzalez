import React from 'react';
import pdf from '../Jesus-Gonzalez-CS-Resume.pdf';


export default function Resume() {
  return (
    <>
      <div class="resume-container text-center">
        <h1 id="resume-title">Resume</h1>
        <div id="resume">
          <embed src={pdf} type="application/pdf"/>
        </div>
      </div>
    </>
  );
}