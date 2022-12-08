import React from 'react';
import './NavTabs.css'
import 'bootstrap/dist/css/bootstrap.css';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (
<nav className="navbar navbar-expand-lg">
  <div className="container-fluid">
    <h1 className="navbar-brand logo">Jesus Gonzalez</h1>
    <button className="burger">
      <div className='one'></div>
      <div className='one'></div>
      <div className='one'></div>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
        <button type="button" class="button">   <a id='about' href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
          About
        </a></button>
       

        </li>
        <li className="nav-item">
        <button type="button" class="button">  <a id='projects'
          href="#Projects"
          onClick={() => handlePageChange('Projects')}
          // Check to see if the currentPage is `Blog`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}
        >
          Projects
        </a></button>
        </li>
        <li className="nav-item">
        <button type="button" class="button">   <a id='resume'
          href="#Resume"
          onClick={() => handlePageChange('Resume')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}
        >
          Resume
        </a></button>
        </li>
        <li className="nav-item">
        <button type="button" class="button">   <a id='contact'
          href="#contact"
          onClick={() => handlePageChange('Contact')}
          // Check to see if the currentPage is `Contact`, and if so we use the active link class from bootstrap. Otherwise, we set it to a normal nav-link
          className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
        >
          Contact
        </a></button>
        </li>
      </ul>
    </div>
  </div>
</nav>

  );
}

export default NavTabs;


