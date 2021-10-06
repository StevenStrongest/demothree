import React from "react";
import {List, ListItem} from 'reusecore/List';
import { Container, Row, Col } from "reusecore/Layout";
import Box from "reusecore/Box";
import Text from "reusecore/Text";
import Heading from "reusecore/Heading";
import data from "assets/data/footer";
import Image from "reusecore/Image"
import FooterWrapper from "./footer.style";
import logo from "assets/images/Footer/logo.png";
import { useState } from "react";
import Link from 'next/link';



const Footer = () => {
  return (
    <FooterWrapper>
      <Container>
        <Row>
          <Col className="col-4 xl-4 lg-12 md-12 sm-12 xs-12">
            <Box className="footer-logo">
              <Image src={logo} />
              <List>
                <ListItem><Link href="/"><a>Email: contact@racefi.run</a></Link></ListItem>
              </List>
              <Text className="copyright">Copyright@ 2021</Text>
            </Box>
          </Col>
          <Col className="col-8 xl-8 lg-12 md-12 sm-12 xs-12">
            <Box className="footer-list">
              <Box className="footer-item">
                <Text className="heading">Document</Text>
                <List>
                  {data.document.map((document, i) =>
                    <ListItem key={i}><Link href={document.link}><a>{document.content}</a></Link></ListItem>
                  )}
                </List>
              </Box>

              <Box className="footer-item">
                <Text className="heading">Learn More</Text>
                <List>
                  {data.learnmore.map((learn, i) =>
                    <ListItem key={i}><Link href={learn.link}><a>{learn.content}</a></Link></ListItem>
                  )}
                </List>
              </Box>

              <Box className="footer-item">
                <Text className="heading">Social</Text>
                <Box className="social-item">
                  {data.social.map((social, i)=>
                  <List key={i}>
                    {social.row.map((row, i) =>
                      <ListItem key={i}><Link href={row.link}><a><Box><Image src={row.icon} /></Box>{row.text}</a></Link></ListItem>
                    )}
                  </List>
                  )}
                </Box>
              </Box>
            </Box>  
          </Col>
        </Row>
        <Text className="copyright screen">Copyright@ 2021 </Text>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
