import React from 'react';

const Nav = ({ showAbout, showProjects, showContact, showResume, pageIndex }) => {
    return (
      <div>
      <nav class="navbar has-background-grey-dark" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <div class="navbar-item">
                    <p class="nav button is-large is-rounded m-1 is-dark"><a href="/">Jesus Gonzalez</a> </p>
                </div>
          
              <a href role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span id="hamburger" aria-hidden="true"></span>
                <span id="hamburger" aria-hidden="true"></span>
                <span id="hamburger" aria-hidden="true"></span>
              </a>
            </div>
            <div class="navbar-menu">
    
                <div class="navbar-end">
                    <p class="nav button is-rounded m-3 is-dark"><a href="#aboutme">About Me</a> </p>
                    <p class="nav button is-rounded m-3 is-dark"><a href="#work">Work</a> </p>
                    <p class="nav button is-rounded m-3 is-dark"><a href="#contactme">Contact Me</a> </p>
                    <p class="nav button is-rounded m-3 is-dark"><a href="https://onedrive.live.com/edit.aspx?resid=EFA38E878C92F671!1659&cid=9161be93-d4ff-4734-a59d-46cb60037bd9&ithint=file%2cdocx&wdOrigin=OFFICECOM-WEB.MAIN.REC">Resume</a> </p>
                </div>
            </div>
        </nav>
    </div>
    );
};

export default Nav;