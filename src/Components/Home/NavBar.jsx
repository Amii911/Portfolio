import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ContactMe from './ContactMe';
import Home from './Home';
import Projects from '../Projects/Projects';

function NavBar() {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <nav className={`header ${darkMode ? 'dark-mode' : ''}`}>
      <Link to="/" className="logo" onClick={toggleNav}>
        Aminat Adebayo
      </Link>
      <div className="nav-links">
        <Link to="/" element={<Home />}>
          home
        </Link>
        <Link to="/projects" element={<Projects />}>
          projects
        </Link>
        <Link to="/contactme" element={<ContactMe />} >
          contact me
        </Link>
      </div>
      <div className="dark-mode-toggle" onClick={toggleDarkMode}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </div>
    </nav>
  );
}

export default NavBar;

