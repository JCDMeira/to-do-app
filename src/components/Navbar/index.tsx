import React from 'react';
import { Link } from 'react-router-dom';

// @ getuikit.com

const Navbar: React.FC = () => {
  return (
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <Link to="/" className="uk-navbar-item uk-logo">
            My Todos
          </Link>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <Link to="/create">
                <span uk-icon="icon: plus; ratio: 1.2"></span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
