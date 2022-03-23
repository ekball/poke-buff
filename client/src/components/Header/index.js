import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';


const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

  return (
    <header className="header-section w-full justify-items-center mx-auto px-4 sm:px-6 border-b border-neutral-600 ">
      <div className="container flex-row justify-space-between-lg justify-center items-center text-center">
        <Link to="/">
          <h1 className='site-title flex align-center lg:w-0 lg:flex-1'>PokeBuff</h1>
        </Link>
        <Link to="/"className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Home</Link>
        <Link to="/dex" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Pokédex</Link>
        <Link to="/releases" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Release Info</Link>
        <Link to="/chatroom" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Chatroom</Link>
        <nav className="text-center">
            {Auth.loggedIn() ? (
                <>
                <Link to="/profile" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Profile</Link>
                <a href="/" onClick={logout} className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    Logout
                </a>
                </>
            ) : (
                <>
                <Link to="/login" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Login</Link>
                <Link to="/signup" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-yellow-500 hover:text-yellow-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Signup</Link>
                </>
            )}
            </nav>
      </div>
    </header>
  );
};


export default Header;
