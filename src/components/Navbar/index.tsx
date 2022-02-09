import React from 'react';

// @ getuikit.com

const Navbar: React.FC = () => {
  return (
    <div className="uk-container">
      <nav className="uk-navbar">
        <div className="uk-navbar-left">
          <a href="#" className="uk-navbar-item uk-logo">
            My todos
          </a>
        </div>
        <div className="uk-navbar-right">
          <ul className="uk-navbar-nav">
            <li>
              <a href="#">
                <span uk-icon="icon: plus; taio: 1.2"></span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
