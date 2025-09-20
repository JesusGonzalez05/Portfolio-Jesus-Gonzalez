import React from "react";
import { HashRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// ^ this is should fix the 404 issues on reload.

// import pages
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Resume from './pages/Resume';

// import components
import Nav from './components/Nav';
import Hero from './components/Hero';
import Footer from './components/Footer';

// import particles 
import Particles from "./components/particles";

// Helper component to render Hero only on the landing page
function Layout({ children }) {
  const location = useLocation();
  return (
    <>
      <Particles />
      <Nav />
      {location.pathname === "/" && <Hero />}  {/* Only on landing page */}
      {children}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutMe" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Resume" element={<Resume />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
