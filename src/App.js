import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';


// import components
import Nav from './components/Nav/index';
// import Hero from './components/Hero/index';
// import Header from './components/Header/index';
// import Footer from './components/Footer/index';


// import particles 
import Particles from "./components/particles";



function App() {
    return (
      <>
            <Particles />
              <Router>
                <Nav />
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/AboutMe" element={<About />} />
                  <Route path="/Contact" element={<Contact />} />
                  <Route path="/Resume" element={<Resume />} />
                  <Route path="/Projects" element={<Projects />} />
                </Routes>
              </Router>
      </>
    );
  }

export default App;
