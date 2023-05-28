import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.module.css';
import Logo from './Logo.js';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>
        <Logo/>
      </div>
      <nav className={classes.nav}>
        <ul className={classes['nav-list']}>
          <li className={classes['nav-item']}>
            <Link to="/upload">Upload</Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to="/appointments">Appointments</Link>
          </li>
          <li className={classes['nav-item']}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
