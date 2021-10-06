import React from "react";
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Heading from "reusecore/Heading";
import Text from "reusecore/Text";
import Image from "reusecore/Image";
import UserMapWrapper from "./userMap.style";
import roadmap from 'assets/images/roadmap/roadmap.svg';

const RoadMap = () => {
  return (
    <UserMapWrapper id="roadmap">
      <Box className="roadmap">
        <Container>
          <Box className="roadmap-heading">
            <Heading><Text as="span" className="primaryColor">Road</Text>Map</Heading>
          </Box>
        </Container>
        <Box className="roadmap-content">
          <Image src={roadmap}/>
        </Box>
      </Box>
    </UserMapWrapper>
  );
};

export default RoadMap;
