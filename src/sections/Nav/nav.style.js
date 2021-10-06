import styled from 'styled-components';

const nav_height = '80px';
const shape_btn = `
clip-path: polygon(12% 0, 100% 0%, 88% 100%, 0% 100%);
`

const NavWrapper = styled.div`
   height: ${nav_height};
   background: rgba(9, 30, 66, 0.6);
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   z-index: 99;
   .header{
      display: flex;
      justify-content: space-between;
      align-items: center;
      .logo{
         &.hide{
            display: none;
         }
      }
      /* nav pc, tablet,... */
      .nav{
         ul{
            display: flex;
            li{
               line-height: ${nav_height};
               margin-right: 38px;
               list-style: none;
               a{
                  font-family: 'Montserrat', sans-serif;
                  font-weight: 500;
                  font-size: 16px;
                  line-height: 24px;
                  border-top-right-radius:10px;
	               border-bottom-left-radius:10px;
                  position: relative;
                  padding: 10px 10px;
                  &:after,&:before{
                     content:" ";
                     width:10px;
                     height:10px;
                     position:absolute;
                     border :0px solid #fff;
                     transition:all 0.6s;
                  }
                 
                  &:hover{
                     &:after{
                        top:-1px;
                        left:-1px;
                        border-top:1px solid #fff;
                        border-left:1px solid #fff;
                     }

                     &:before{
                        bottom:-1px;
                        right:-1px;
                        border-bottom:1px solid #fff;
                        border-right:1px solid #fff;
                     }

                     border-top-right-radius:0px;
	                  border-bottom-left-radius:0px;
                     &:before,&:after{
                        width:115%;
                        height:115%;
                     }
                  }
               }
            }
         }
      }
   }

   .nav-btn{
      font-weight: 700;
      height: 40px;
      background: ${props => props.theme.primaryColor};
      ${shape_btn}
      margin-left: 18px;
      box-shadow: 0px 8px 80px rgba(152, 214, 239, 0.3);
      transition: 0.5s;
      position: relative;
      &:hover{
        &::after{
         opacity: 1;
			transform: translateY(0) rotateX(0);
        }

        &::before{
         opacity: 0;
			transform: translateY(50%) rotateX(90deg);
        }
      }

      &::after{
         top: 0;
         left: 0;
         opacity: 0;
         width: 100%;
         ${shape_btn}
         display: block;
         background: linear-gradient(to right, #d53369, #cbad6d);
         position: absolute;
         transform: translateY(-50%) rotateX(90deg);
         transition: 0.5s;
         height: 100%;
         line-height: 40px;
         content: "Start";
      }

      &::before{
         width: 100%;
         height: 100%;
         top: 0;
         left: 0;
         background: ${props => props.primaryColor};
         opacity: 1;
         display: block;
         transition: 0.5s;
         position: relative;
         content: "Start";
         transform: translateY(0) rotateX(0);
      }
   }

   /* nav mobie */
   .header-mobie{
      display: none;
   }
   @media only screen and (max-width: 1200px){
      .header{
         .nav{
            ul{
               li{
                  margin-right: 24px;
               }
            }
         }
      }
   }

   @media only screen and (max-width: 992px){
      .header{
         .logo{
            display: none;
         }
         .nav{
            width: 100%;
            ul{
               justify-content: space-between;
               width: 100%;
               li{
                  margin-right: 16px;
                  a{
                     padding: 5px;
                  }
               }
            }
         }
      }
   }

   @media only screen and (max-width: 865px){
      .container{
         padding: 0;
      }
      .header{
         .nav{
            ul{
               li{
                  margin-right: 10px;
                  a{
                     padding: 0px;
                  }
               }
            }
         }
      }
   }

   @media only screen and (max-width: 640px){
      background: #091E42!important;
      height: auto;
      padding: 20px 0px;
      .container{
         padding-left: 15px;
         padding-right: 15px;
      }
      .header{
         .nav{
            display: none;
         }

         .logo{
            &.hide{
               display: block;
            }
         }

         .header-mobie{
            display: block;
         }
      }
   }

`;

export default NavWrapper;