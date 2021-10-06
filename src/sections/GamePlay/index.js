import React, { Component, useEffect } from 'react';
import { Container, Row, Col } from 'reusecore/Layout';
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import {SlickSlider, SliderItem} from 'reusecore/SlickSlider';
import GamePlayWrapper from './gameplay.style';
import data from 'assets/data/gameplay';
import next_button from 'assets/images/gameplay/next-button.png';
import pre_button from 'assets/images/gameplay/pre-button.png';



const Production = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <Image src={next_button} />,
        prevArrow: <Image src={pre_button} />,
      };

    return (
        <GamePlayWrapper id="gameplay">
            <Box className="gameplay">
               <Container>
               <Box className="gameplay-heading">
                    <Heading><Heading className="primaryColor">Game</Heading>play</Heading>
                </Box>
               </Container>
                <Box className="gameplay-content">
                    <SlickSlider {...settings}>
                        {data.gameplay.map((gameplay, i) =>
                        <SliderItem key={i}>
                            <Box style={{backgroundImage: `url(${gameplay.url})`}} className="gameplay-item">
                                <Box className="gameplay-intro">
                                    <Text className="heading">​​​{gameplay.heading}</Text>
                                    <Text>{gameplay.content}</Text>
                                </Box>
                            </Box>
                        </SliderItem>
                        )}
                    </SlickSlider>
                </Box>
            </Box>
        </GamePlayWrapper>
    )
}


export default Production;