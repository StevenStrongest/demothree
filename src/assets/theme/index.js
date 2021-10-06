import { createGlobalStyle } from 'styled-components';


const GlobalStyle = createGlobalStyle`

::selection {
    background: #333333;
    color: #ffffff;
  }

  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  * {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  *:focus {
    outline: none;
  }

html{
    box-sizing: border-box;
    -ms-overflow-style: scrollbar;
    scroll-behavior: smooth;
    overflow-x: hidden;
}

body,html {
    
    margin: 0px;

}
body {
  font-size: 16px;
  line-height: 28px;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  font-family: 'Poppins', sans-serif;
  color: ${props => props.theme.bodyColor ? props.theme.bodyColor : '#BEABDF'};
  overflow-x: hidden !important;
  font-weight: 400;
  margin: 0;
  padding: 0;

    background: #060F29;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
}

h1,
h2,
h3,
h4,
h5,
h6 {
    font-family: 'Bungee', cursive;
    color: ${props => props.theme.headingColor ? props.theme.headingColor : '#FFFFFF'};
    font-size: 40px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
    display: inline-block;
    &::after{
      content: "";
      width: 100%;
      height: 8px;
      display: block;
      background: ${props => props.theme.primaryColor};
      margin-bottom: 24px;
      clip-path: polygon(7% 0, 100% 0%, 93% 100%, 0% 100%);
    }
}

p{
    font-family: 'Montserrat', sans-serif;
    margin: 0 0 15px 0;
    font-size: 16px;
    line-height: 24px;
    font-weight: 500;
    color: #F4F5F7;
}

a{
    text-decoration: none;
    color: #F4F5F7;
  }
  img{
    max-width: 100%;
  }


section{
    position: relative;
}

.text-center{
  text-align: center;
}

.primaryColor{
  color: #DD0000;
  display: inline-block;
}

span.primaryColor{
    font-family: 'Bungee', cursive;
    color: ${props => props.theme.primaryColor};
    font-size: 40px;
    line-height: 60px;
    margin: 0;
    padding: 0;
    text-transform: uppercase;
    font-weight: 400;
    position: relative;
}

button, .btn{
  display: inline-block;
  width: 170px;
  height: 40px;
  font-weight: 400;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  background-color: transparent;
  border: 1px solid transparent;
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  line-height: 1.5;
  border-radius: 0.25rem;
  transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
  border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  outline: none;
  font-family: 'Montserrat', sans-serif;
  border: none;
}

#container.visible{
  display: none!important;
  box-shadow: none;
}
`

export default GlobalStyle
