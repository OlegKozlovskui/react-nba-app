import React from 'react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return(
    <header>
      <div className="flexbox-container">
        <Link to="/" className="logo">
          <span></span>
        </Link>
        <nav>
          <Link to="/teams">Team</Link>
        </nav>
      </div>
    </header>
  )
};

export default Header;