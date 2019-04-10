import React from 'react';
import { Link } from 'gatsby';
import NavStyles from './styles/nav.module.css';

export default function Nav() {
  return (
    <nav className={NavStyles.nav}>
      <ul>
        <li>
          <Link to="/" activeClassName={NavStyles.active}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName={NavStyles.active}>
            About
          </Link>
        </li>
        <li>
          <Link to="/tips" activeClassName={NavStyles.active}>
            Tips
          </Link>
        </li>
        <li>
          <Link to="/users" activeClassName={NavStyles.active}>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}
