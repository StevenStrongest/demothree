import React from 'react';
import BackedByWrapper from './backedby.style';
import Box from 'reusecore/Box';
import Text from 'reusecore/Text';
import Heading from 'reusecore/Heading';
import Image from 'reusecore/Image';
import data from 'assets/data/backedby';
import { Container } from 'reusecore/Layout';
import {SlickSlider, SliderItem} from 'reusecore/SlickSlider';
import next_button from 'assets/images/gameplay/next-button.png';
import pre_button from 'assets/images/gameplay/pre-button.png';

const BackedBy = () =>{
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Image src={next_button} />,
        prevArrow: <Image src={pre_button} />,
      };
 return(
     <BackedByWrapper id="backedby">
         <Container>
            <Box className="backed-heading">
                <Heading><Text as="span" className="primaryColor">back</Text>ed</Heading>
            </Box>
            <Box className="backed-content">
            {data.backed.map((backed, i) =>
                <Box key={i} className="backed-item">
                    <Image src={backed.logo} />
                </Box>
            )}
            </Box>
           <Box className="backed-slide">
            <SlickSlider {...settings}>
                    {data.backed.map((backed, i) =>
                    <SliderItem key={i}>
                           <Box className="box-logo">
                            <Image id={backed.id} className="img-item" src={backed.logo} />
                           </Box>
                    </SliderItem>
                    )}
                </SlickSlider>
           </Box>
         </Container>
     </BackedByWrapper>
 );
}

export default BackedBy;