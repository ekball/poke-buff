import React from 'react';
import { Link } from 'react-router-dom';
import Auth from '../../utils/auth';
import image from '../Home/pokebuff-title-blur.png';

const Header = () => {

    const logout = event => {
        event.preventDefault();
        Auth.logout();
      };

  return (
    <header className="header-section flex items-center justify-center mb-3">
      <img src={image} class="max-w-sm h-auto object-center mx-auto"/>
      
      <div className="container flex-row justify-space-between-lg justify-center items-center mx-auto">
        
        <Link to="/"className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mx-auto'>Home</Link>
        <Link to="/dex" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mx-auto'>Pokédex</Link>
        <Link to="/releases" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mx-auto'>Release Info</Link>
        <Link to="/chatroom" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 mx-auto'>Chatroom</Link>
        
        <nav className="flex items-center justify-center mb-3">
            {Auth.loggedIn() ? (
                <>
                <Link to="/profile" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Profile</Link>
                <a href="/" onClick={logout} className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                    Logout
                </a>
                </>
            ) : (
                <>
                <Link to="/login" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Login</Link>
                <Link to="/signup" className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>Signup</Link>
                </>
            )}
        </nav>
      </div>
    </header>
  );
};


export default Header;
