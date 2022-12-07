import React, { useState } from 'react';
import './App.css'

// Import the components
import Header from './components/Header';
import Footer from './components/Footer';
import About from './components/About ';
import Contact from './components/Contact';
import Nav from './components/Nav';
import Projects from './components/Projects';
import Resume from './components/Resume';

function App() {

  const [pageIndex, setPageIndex] = useState(0);


  return (
    <div className="">

      <Nav
        showAbout={() => setPageIndex(0)}
        showProjects={() => setPageIndex(1)}
        showContact={() => setPageIndex(2)}
        showResume={() => setPageIndex(3)}
        pageIndex={pageIndex}
      />

      <Header />

      {pageIndex === 0 ? (
        <About />
      ) : pageIndex === 1 ? (
        <Projects />
      ) : pageIndex === 2 ? (
        <Contact />
      ) : pageIndex === 3 ? (
        <Resume />
      ) : (
        <About />
      )}

      <Footer />

    </div>
  );
}

export default App;