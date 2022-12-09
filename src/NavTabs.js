import React from 'react';
import './NavTabs.css'
import 'bootstrap/dist/css/bootstrap.css';



// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs({ currentPage, handlePageChange }) {
  return (

<div className='navigation'>
<ul class="nav justify-content-center">

  <li class="nav-item">
    <button type="button" class="button">   
      <a id='about' href="#about" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active' : 'nav-link'}>
            About
      </a>
    </button> 
  </li> 

  <li class="nav-item">
    <button type="button" class="button">  
      <a id='projects' href="#Projects" onClick={() => handlePageChange('Projects')} className={currentPage === 'Projects' ? 'nav-link active' : 'nav-link'}>
      Projects
      </a>
    </button>
  </li>

  <li class="nav-item">
    <button type="button" class="button">   
      <a id='resume' href="#Resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active' : 'nav-link'}>
      Resume
      </a>
      </button>  
  </li>

  <li class="nav-item">
    <button type="button" class="button">   
      <a id='contact' href="#contact" onClick={() => handlePageChange('Contact')} className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}>
      Contact
      </a>
    </button>
  </li>

</ul>
</div>



  );
}

export default NavTabs;


