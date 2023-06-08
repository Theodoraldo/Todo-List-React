import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './style/Navbar.css';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    <nav className="Nav">
      <NavLink to="/">Home</NavLink>
      <NavLink to="/about">About</NavLink>
    </nav>
  );
};
export default Navbar;
