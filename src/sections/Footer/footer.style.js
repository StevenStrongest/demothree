import styled from "styled-components";
import footerBg from "assets/images/footer-bg.png";

const FooterWrapper = styled.div`
background: rgba(41, 55, 97, 0.2);
padding: 80px 0px 64px 0px;
    width: 100%;
    .footer-logo{
      img{
        width: 192px;
        margin-bottom: 24px;
      }

      .copyright{
        font-size: 14px;
        margin-left: 14px;
      }
    }
    ul{
      padding-left: 15px;
    }

    .footer-list{
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      .footer-item{
        p.heading{
          font-weight: 700;
          font-size: 20px;
          line-height: 30px;
          margin: 0;
          padding: 0;
          color: #ffffff;
          margin-bottom: 20px;
          text-transform: capitalize;
        }
        ul{
          li{
            margin-bottom: 10px;
            transition: 0.3s;
            &:hover{
              transform: translateX(5px);
              color: ${props => props.theme.primaryColor};
              a{
                color: ${props => props.theme.primaryColor};
              }
            }
          }
        }
        .social-item{
          display: flex;
          ul:not(:last-child){
            margin-right: 45px;
          }
          ul{
            padding-left: 0px;
            li{
              list-style: none;
              margin-bottom: 20px;
              a{
                display: flex;
                align-items: center;
                text-transform: capitalize;
                img{
                  width: 24px;
                  height: 24px;
                  margin-right: 8px;
                }
              }
            }
          }
        }
      }
    }

    .copyright{
      font-size: 14px;
      margin-top: 20px;
      &.screen{
        display: none;
      }
    }

    @media only screen and (max-width: 1200px){
      .footer-logo{
        margin: 0px auto 40px;
        text-align: center;
        .copyright{
          display: none;
        }
        ul{
          margin-top: 10px;
          li{
            list-style: none;
          }
        }
        img{
          margin: auto
        }
      }
        .copyright{
        &.screen{
          display: block;
        }
      }
    }
`;

export default FooterWrapper;
