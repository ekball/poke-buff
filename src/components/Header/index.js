import React from "react";
import NavTabs from "../NavTabs";

// // navigation is located in the header
// function Header() {

//     return(

//         <header className="header-section">

           
            
//         </header>

//     );
// }

// navigation is located in the header
function Header(props) {

    const {
        nav,
        currentNav,
        setCurrentNav,
    } = props

    return(

        <header className="header-section">

            <NavTabs
                nav={nav}
                currentNav={currentNav}
                setCurrentNav={setCurrentNav}
                className='nav-tabs'
            >
                
            </NavTabs>
            
        </header>

    );
}

export default Header;