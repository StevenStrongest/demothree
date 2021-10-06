import React, { useEffect, useRef } from 'react';
import GameAssetsWrapper from './gameassets.style';
import Box from 'reusecore/Box';
import Heading from 'reusecore/Heading';
import Text from 'reusecore/Text';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import { Container, Row, Col } from 'reusecore/Layout';
import data from 'assets/data/gameassets';
import VanillaTilt from 'vanilla-tilt';


const GameAssets= () => {
    
    useEffect(() =>{
        const items = document.querySelectorAll(".assets-items");
        items.forEach((e) =>{
            VanillaTilt.init(e, {
                max: 25,
                speed: 400
            })
        })
    }, [])

    return (
    <GameAssetsWrapper id="gameassets">
        <Container>
            <Box className="gameassets">
                <Box className="gameassets-heading">
                    <Heading><Text as="span" className="primaryColor">Game</Text>Assets</Heading>
                </Box>
                <Box className="gameassets-content">
                    {data.gameassets.map((gameasset, i) =>
                        <Box key={i} className="row">
                            {gameasset.row.map((row, i) =>
                            <Box key={i} className="content-item assets-items">
                                <Box className="card-content">
                                    <Box className="imgage"><Image src={row.img} /></Box>
                                    <Box className="content-intro">
                                        <Text className="heading">{row.heading}</Text>
                                        <Text>{row.content}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            )}
                        </Box>
                    )}
                    {data.assertscreen1400.map((gameasset, i) =>
                        <Box key={i} className="row md-screen">
                            {gameasset.row.map((row, i) =>
                            <Box key={i} className="content-item assets-items">
                                <Box className="card-content">
                                    <Box className="imgage"><Image src={row.img} /></Box>
                                    <Box className="content-intro">
                                        <Text className="heading">{row.heading}</Text>
                                        <Text>{row.content}</Text>
                                    </Box>
                                </Box>
                            </Box>
                            )}
                        </Box>
                    )}
                </Box>
            </Box>
        </Container>
    </GameAssetsWrapper>
    );
}

export default GameAssets;