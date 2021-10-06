import React, { useEffect } from 'react';
import OurTeamWrapper from './ourteam.style';
import {Container, Row, Col} from 'reusecore/Layout';
import Heading from 'reusecore/Heading'
import Box from 'reusecore/Box';
import Image from 'reusecore/Image';
import Text from 'reusecore/Text';
import data from 'assets/data/ourteam';
import AOS from 'aos';
import 'aos/dist/aos.css';
const OurTeam = () =>{
    useEffect(() =>{
        AOS.init({
            throttleDelay: 99, 
            debounceDelay: 50,
            disable: false,
            duration : 500
        })
    })
    return(
        <OurTeamWrapper id="team">
            <Box className="overlay">
                <Container>
                    <Box className="team-heading">
                        <Heading>Team</Heading>
                    </Box>
                    <Box className="team-content">
                        {data.ourteam.map((team, i) =>
                        <Box data-aos={team.animation.name} data-aos-delay={team.animation.delay} key={i} className="row">
                            {team.row.map((row, i) =>
                            <Box key={i} className="team-item">
                                <Image src={row.avatar} />
                                <Text className="heading">{row.name}</Text>
                                <Text>{row.role}</Text>
                            </Box>
                            )}
                        </Box>
                        )}
                        {data.teamscreen.map((team ,i) =>
                        <Box key={i} className="row screen-md">
                            {team.row.map((row, i) =>
                            <Box key={i} className="team-item">
                                <Image src={row.avatar} />
                                <Text className="heading">{row.name}</Text>
                                <Text>{row.role}</Text>
                            </Box>
                            )}
                        </Box>
                        )}
                    </Box>
                </Container>
            </Box>
        </OurTeamWrapper>
    );
}

export default OurTeam;