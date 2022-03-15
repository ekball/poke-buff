import React from 'react';

function NavTabs({ currentPage, handlePageChange }) {
    return (
            <ul className="nav nav-tabs">

                {/* set the site title on header */}
                <li>
                    <h2 className='site-title'>PokéBuff</h2>
                </li>

                {/*  navigation tab to the home section */}
                <li >
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
                <li >
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
                <li >
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
                <li >
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

                <li >
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

                <li >
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
    );
}

export default NavTabs;
