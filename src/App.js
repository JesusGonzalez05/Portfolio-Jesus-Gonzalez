import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


// import pages


// import components
import NavTabs from './components/Nav/index';
// import Hero from './components/Hero'
// import About from './components/About';
// import Projects from './components/Projects';
// import Contact from './components/Contact';
// import Resume from './components/Resume';


// import particles 
import Particles from "./components/particles";



function App() {
  return ( 
    <>
    <Particles />

    <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

    </>
  );}



function App() {
    return (
      <>
            <Particles />
  
              <Router>
                <Nav />
                <Routes>
                  <Route path="/" element={<Landing />} />
                  <Route path="/signup" element={<Signup />} />
                  <Route path="/login" element={<Login />} />
                  <Route path="/me" element={<Dashboard />} />
                  <Route path="/team" element={<Team />} />
                  <Route path="/collections" element={<Collections />} />
  
                  <Route path="/collections/:address" element={<Collection />} />
                  <Route path="/collections/trending" element={<Trending />} />
                  <Route path="/collections/volume" element={<Volume />} />
                  <Route path="/collections/sales" element={<Sales />} />
                  <Route path="/projects" element={<Projects />} />
                  <Route
                    path="/projects/:projectId"
                    element={<SingleProject />}
                  />

                </Routes>
              </Router>
      </>
    );
  }

export default App;
