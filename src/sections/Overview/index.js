import React, { useEffect } from 'react';
import OverviewWrapper from './overview.style';
import Image from 'reusecore/Image';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import { Container } from '@material-ui/core';
import Heading from 'reusecore/Heading';
import banner_right from 'assets/images/overview/banner-right.png'
import background_heading from 'assets/images/overview/background-heading.png'
import background_right from 'assets/images/overview/background-right.png'
import AOS from 'aos';
import 'aos/dist/aos.css';
const Slogan = () =>{
    useEffect(() =>{
        AOS.init({
            throttleDelay: 99, 
            debounceDelay: 50,
            disable: false,
            duration : 500
        })
    })
   return(
    <OverviewWrapper id="overview">
        <Container>
           <Box className="overview">
                <Box className="overview-heading">
                    <Heading data-aos="fade-right"><Text as="span" className="primaryColor">Over</Text>view</Heading>
                    <Text data-aos="fade-right" data-aos-delay="500">RACEFI is a complete NFT cars racing ecosystem where you can participate in races 
                        or  own parts of the game and make profit. All ownable parts of the game are in the 
                        form of verifiably owned NFTs. ​</Text>
                    <Image className="background-heading" src={background_heading} />
                </Box>
                <Box className="overview-img">
                    <Box><Image src={banner_right} /></Box>
                    <Image className="background-right" src={background_right} />
                </Box>
           </Box>
        </Container>
    </OverviewWrapper>
   );
}

export default Slogan;