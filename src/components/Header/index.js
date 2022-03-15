import React from "react";
import Nav from "../NavTabs"

// navigation is located in the header
function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <header className="header-section">

            <Nav
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                className='nav-tabs'
            >
                
            </Nav>
            
        </header>

    );
}

export default Header;