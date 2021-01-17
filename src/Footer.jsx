import React from 'react';

const Footer = () => {

    const currentYear = new Date().getFullYear();

    return(
        <>
            <footer className="bg-light text-center">
            <p>© {currentYear} Haroon Bajwa. All Rights Reserved | Terms and Conditions</p>
            </footer>
        </>
    )
}

export default Footer;