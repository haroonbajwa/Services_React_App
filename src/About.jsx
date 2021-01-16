import React from 'react';
import AboutImage from './images/aboutimage2.png';
import Common from './Common';

const About = () => {
    return(
        <>
        <Common 
            name = "Welcome to About page"
            imgsrc = {AboutImage}
            visit = "/contact"
            btname = "Contact Now"
        />
        </>
    );
}

export default About;