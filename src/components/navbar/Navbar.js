import React, { Component } from 'react';
import './Navbar.css';
import logo from '../navbar/master-logo.png';
import ReactGA from 'react-ga4';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom

// Define MenuItems here or import it from the appropriate location
const MenuItems = [
  {
    title: 'Home',
    url: '/',
    cName: 'nav-links',
    active: false,
  },{
    title: 'Program',
    url: '/Program',
    cName: 'nav-links',
    active: false,
  },
  {
    title: 'Blog',
    url: 'https://blog-mardika.netlify.app',
    cName: 'nav-links',
    active: false,
    external: true,
  },
  // ... other menu items
];

class Navbar extends Component {
  state = { clicked: false };

  handleClick = () => {
    this.setState({ clicked: !this.state.clicked });
  };

  handleExternalLinkClick = (url, label) => {
    ReactGA.event({
      action: 'Click',
      category: 'Button Navbar',
      label,
    });

    window.location.href = url;
  };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          <img className="logo" src={logo} alt="logo" />
        </h1>

        <div className="menu-icons" onClick={this.handleClick}>
          <i className={this.state.clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        <ul className={this.state.clicked ? 'nav-menu active' : 'nav-menu'}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                {item.external ? (
                  <a
                    className={item.cName}
                    href={item.url}
                    onClick={() => this.handleExternalLinkClick(item.url, item.title)}
                  >
                    {item.title}
                  </a>
                ) : (
                  <Link className={item.cName} to={item.url}>
                    {item.title}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
