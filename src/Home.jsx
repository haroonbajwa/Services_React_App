import React from 'react';
import HeaderImg from './images/headerimage.png';
import Common from './Common';

const Home = () => {
    return(
        <>
        <Common 
            name = "Grow your business with"
            imgsrc = {HeaderImg}
            visit = "/services"
            btname = "Get Started"
        />
        </>
    );
}

export default Home;