import React from "react";

function Footer() {

    return(
        <footer className="footer-section flex flex-col bg-gray-200 text-center lg:text-left font-sans bottom-0 h-fit mt-5 p-0">
            <p class="text-gray-700 text-center p-4">
                Credit to Poke API for providing the dex information.
                Credit to RAWG API for providing the game release date information.
                Credit to TPC™® for the usage of their images and info on the franchise. 
            </p>
        </footer>
    );
}

export default Footer;