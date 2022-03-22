import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (

        <header className='header-section w-full justify-items-center mx-auto px-4 sm:px-6'>

                {/* set the site title on header */}
                <h1 className='site-title text-center shrink-[2] lg:w-0 lg:flex-1 text-6xl font-bold font-[Oswald]'>PokéBuff</h1>

                <div className='flex justify-center border-b-2 border-slate-900 py-6 md:justify-start md:space-x-10'>

                <ul className="nav flex flex-row gap-10 justify-between content-center">

                    {/*  navigation tab to the home section */}
                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500 '>
                        <a
                        href="#home"
                        onClick={() => handlePageChange('Home')}
                        // when the home button is clicked, re-render the page with the info from the home component
                        // if the current page is the home page, set the value of nav-link to active, otherwise, leave false
                        className={currentPage === 'Home' ? 'nav-link active' : 'nav-link'}
                        >
                        Home
                        </a>
                    </li>

                    {/*  navigation tab to the pokedex section */}
                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <a
                        href="#dex"
                        onClick={() => handlePageChange('Dex')}
                        // when the pokedex button is clicked, re-render the page with the info from the pokedex component
                        // if the current page is the pokedex page, set the value of nav-link to active, otherwise, leave false
                        className={currentPage === 'Dex' ? 'nav-link active' : 'nav-link'}
                        >
                        Dex
                        </a>
                    </li>

                    {/*  navigation tab to the releases section */}
                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <a
                        href="#releases"
                        onClick={() => handlePageChange('Releases')}
                        // when the releases button is clicked, re-render the page with the info from the releases component          
                        // if the current page is the releases page, set the value of nav-link to active, otherwise, leave false
                        className={currentPage === 'Releases' ? 'nav-link active' : 'nav-link'}
                        >
                        Releases
                        </a>
                    </li>

                    {/*  navigation tab to the contact section */}
                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <a
                        href="#contact"
                        // when the contact button is clicked, re-render the page with the info from the contact component
                        // if the current page is the contact page, set the value of nav-link to active, otherwise, leave false
                        onClick={() => handlePageChange('Contact')}
                        className={currentPage === 'Contact' ? 'nav-link active' : 'nav-link'}
                        >
                        Contact
                        </a>

                    </li>

                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <a
                        href="#login"
                        // when the login button is clicked, re-render the page with the info from the login component
                        // if the login page is the login page, set the value of nav-link to active, otherwise, leave false
                        onClick={() => handlePageChange('LogIn')}
                        className={currentPage === 'LogIn' ? 'nav-link active' : 'nav-link'}
                        >
                        Log In
                        </a>

                    </li>

                    <li className='nav-tab hover:animate-bounce rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-slate-100 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500'>
                        <a
                        href="#signup"
                        // when the signup button is clicked, re-render the page with the info from the signup component
                        // if the signup page is the contact page, set the value of nav-link to active, otherwise, leave false
                        onClick={() => handlePageChange('SignUp')}
                        className={currentPage === 'SignUp' ? 'nav-link active' : 'nav-link'}
                        >
                        Sign Up
                        </a>

                    </li>
                </ul>
            </div>
        </header>
    );
}

export default NavTabs;
