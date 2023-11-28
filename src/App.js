import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Projects from './Components/Projects/Projects';
import NavBar from './Components/Home/NavBar';
import ProjectDetails from './Components/Projects/ProjectDetails';
import ContactMe from './Components/Home/ContactMe';
import Home from './Components/Home/Home';
import Footer from './Components/Home/Footer';

function App() {
  return (
    <div className="App">
          <div>
      <Router>
        <NavBar/>        
        <Routes>
          <Route path="/projects" element={<Projects />} />
          <Route path="/project/:name" element={<ProjectDetails />} />
          <Route path="/contactme" element={<ContactMe />} />
          <Route path="/" element={<Home />} /> 
        </Routes>  
        <Footer/>   
      </Router>
    </div>
    </div>
  );
}

export default App;
