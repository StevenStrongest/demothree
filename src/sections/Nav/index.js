import React, { useEffect } from 'react';
import NavWrapper from './nav.style';
import Box from 'reusecore/Box';
import Button from 'reusecore/Button';
import Image from 'reusecore/Image';
import {Container} from 'reusecore/Layout';
import {List, ListItem} from 'reusecore/List';
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from 'react';
import logo from 'assets/images/logo.png';
import data from 'assets/data/nav';
import NavMobie from './Navmobie';


const Nav = () =>{
    useEffect(() =>{
        const header = document.getElementById("header");
        window.addEventListener('scroll', () =>{
            if(window.pageYOffset > 0 || document.documentElement.scrollTop > 0){
                header.style.background = '#091E42';
                header.style.transition = '1s';
            }
            else{
                header.style.background = 'rgba(9, 30, 66, 0.6)';
            }
        })
    })
    return(
        <>
        <NavWrapper id="header">
           <Container>
            <Box className="header">
                    <Box className="logo"><Image src={logo} /></Box>
                    <Box className="nav">
                        <List>
                            {data.nav.map((nav, i) =>
                                <ListItem key={i}><Link href={nav.link}><a>{nav.content}</a></Link></ListItem>
                            )}
                            <ListItem><Button className="nav-btn">Start</Button></ListItem>
                        </List>
                    </Box>
                    <Box className="logo hide"><Image src={logo} /></Box>
                    <Box className="header-mobie">
                        <Button className="nav-btn">&nbsp;</Button>
                    </Box>
                </Box>
           </Container>
        </NavWrapper>
        <NavMobie />
        </>
    );
}

export default Nav;