import React from "react";
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import Loader from 'sections/Loader';
import Nav from "sections/Nav";
import Banner from "sections/Banner";
import Overview from "sections/Overview";
import GamePlay from "sections/GamePlay";
import GameAssets from "sections/GameAssets";
import BackedBy from "sections/BackedBy";
import Roadmap from "sections/Roadmap";
import Footer from "sections/Footer";
import FavIcon from "assets/images/logo.png";
import theme from "assets/theme/theme";
import GlobalStyle from "assets/theme";
import OurTeam from "../src/sections/OurTeam";

const Home = () => {
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>
          Welcome to RaceFi  
        </title>
        <meta
          name="Description"
          content="polrare.co"
        />
        <meta name="theme-color" content="#280D57" />
        <link rel="shortcut icon" type="image/x-icon" href={FavIcon} />
        <link
          rel="stylesheet"
          type="text/css"
          charSet="UTF-8"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
        />
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
        />
        <link href="https://fonts.googleapis.com/css2?family=Bungee&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" /> 
      </Head>
      <GlobalStyle />
      {/* <Loader /> */}
      <Nav />
      <Banner />
      <Overview />
      <GamePlay />
      <GameAssets/>
      <Roadmap />
      <OurTeam />
      <BackedBy />
      <Footer />
    </ThemeProvider>
  );
};

export default Home;
