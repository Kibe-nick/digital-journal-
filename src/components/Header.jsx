// Header.jsx
import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <h1>Digital Journal</h1>
      <nav>
        <NavLink
          to="/"
          end
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Home
        </NavLink>
        <NavLink
          to="/posts"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Posts
        </NavLink>
        <NavLink
          to="/create"
          className={({ isActive }) => (isActive ? 'active' : '')}
        >
          Create Post
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
