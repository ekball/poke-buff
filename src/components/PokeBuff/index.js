import React, { useState } from 'react';
import NavTabs from '../NavTabs';
import Pokedex from '../Pokedex';
import Home from '../Home';
import Releases from '../ReleaseDates';
import Contact from '../Contact';
import LogIn from '../LogIn';
import SignUp from '../SignUp';

function PokeBuff() {

    const [currentPage, setCurrentPage] = useState('Home');

    const renderPage = () => {

        if (currentPage === 'Home') {
            return <Home />;
        }

        // if the user clicks on the pokedex button, render the pokedex page component
        if (currentPage === 'Dex') {
        return <Pokedex />;
        }

        // if the user clicks on the release dates button, render the about release dates component
        if (currentPage === 'Releases') {
        return <Releases />;
        }
        
        // if the user clicks on the contact button, render the contact page component
        if (currentPage === 'Contact') {
        return <Contact />;
        }

        // if the user clicks on the LogIn button, render the LogIn page component
        if (currentPage === 'LogIn') {
            return <LogIn />;
        }

        // if the user clicks on the SignUp button, render the SignUp page component
        if (currentPage === 'SignUp') {
            return <SignUp />;
        }

        // otherwise, default the page to the home section
        return <Home />;
    };

    const handlePageChange = (page) => setCurrentPage(page);

    return (
        <div>

            <NavTabs currentPage={currentPage} handlePageChange={handlePageChange} />

            {renderPage()}

        </div>
    );
}

export default PokeBuff;