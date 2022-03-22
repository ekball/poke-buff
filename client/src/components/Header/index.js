import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-secondary mb-4 py-2 flex-row align-center">
      <div className="container flex-row justify-space-between-lg justify-center align-center">
        <Link to="/">
          <h1>PokeBuff</h1>
        </Link>
        <Link to="/dex">Pokédex</Link>
        <Link to="/releases">Release Info</Link>
        <Link to="/chatroom">Chatroom</Link>
        <nav className="text-center">
          <Link to="/login">Login</Link>
          <Link to="/signup">Signup</Link>
        </nav>
      </div>
    </header>
  );
};


export default Header;
