import React from 'react';
import pdf from '../Jesus-Gonzalez-CS-Resume.pdf';


export default function Resume() {
  return (
    <section>
      <div class="contentDiv">
        <h1>Resume</h1>
          <div id="resume">
              <embed src={pdf} type="application/pdf"/>
          </div>
      </div>
    </section>
  );
}