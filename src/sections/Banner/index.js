import React, { useEffect, useState } from 'react';;
import BannerWrapper from './banner.style';
import Text from 'reusecore/Text';
import {Container} from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Button from 'reusecore/Button';
import AOS from 'aos';
import 'aos/dist/aos.css'
import { Waypoint } from 'react-waypoint';


const NavBanner = () =>{
    const addAnimate = () =>{
        const text1 = document.querySelector('.text-pri');
        const text2 = document.querySelector('.text-ani');
        text1.classList.add("animation");
        text2.classList.add("animation");
    }

    const removeAnimate = () =>{
        const text1 = document.querySelector('.text-pri');
        const text2 = document.querySelector('.text-ani');
        text1.classList.remove("animation");
        text2.classList.remove("animation");
    }
    return(
        <Waypoint onEnter={addAnimate} onLeave={removeAnimate} onPositionChange={addAnimate}>
            <BannerWrapper id="banner">
                <Box className="overlay">&nbsp;</Box>
                <Container>
                    <Box className="banner-content">
                        <Heading className="primaryColor text-pri">Welcome to</Heading><br />
                        <Heading className="text-ani">new metaverse</Heading>
                        <Text>Cars, Mechanic Shops, Gas Stations, Racetrack Land!<br/>
                        Now you can win crypto prizes and own part of the<br/> game you love to play!</Text>
                        <Button>&nbsp;</Button>
                    </Box>
                </Container>
            </BannerWrapper>
        </Waypoint>
    );
}

export default NavBanner;