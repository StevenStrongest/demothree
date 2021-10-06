import styled from "styled-components";

const GamePlayWrapper = styled.div`
  margin-top: 76px;
  .gameplay{
    .gameplay-heading{
      position: absolute;
      top: 55px;
      z-index: 1;
      h1{
        text-align: center;
        position: relative;
        &:after{
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
        }
      }
    }

    .gameplay-content{
      margin-top: 44px;
      position: relative;
      .gameplay-item{
        background-repeat: no-repeat;
        background-size:cover;
        background-position:center;
        width: 100%;
        height: 600px;
        position: relative;
        .gameplay-intro{
          position: absolute;
          bottom: 40px;
          left: 135px;
          width: 490px;
          height: 207px;
          background: rgba(9, 30, 66, 0.8);
          padding: 32px;
          border: 7px solid ${props => props.theme.primaryColor};
          p.heading{
            font-size: 28px;
            line-height: 30px;
            margin: 0px 0px 16px 0px;
            font-weight: 800;
            color: #ffffff;
          }
          p{
            font-size: 20px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .image{
    position: absolute;
    width: 64px;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    margin: 40px 0px;
    display: none!important;
    &.slick-prev{
      left: calc(50% - (40px));
    }
    &.slick-next{
      left: calc(50% + (40px));
    }
  }

  .slick-dots{
    li{
      button{
        &:before{
          width: 36px;
          height: 36px;
          font-size: 16px;
          color: ${props => props.theme.primaryColor};
          position: absolute;
          top: 40px;
        }
      }
    }
  }

  @media only screen and (max-width: 1200px){
    .gameplay{
      .gameplay-content{
        .gameplay-item{
          height: 500px;
        }
      }
    }
  }

  @media only screen and (max-width: 991px){
    .gameplay{
      .gameplay-content{
        .gameplay-item{
          height: 450px;
        }
      }
    }
  }

  @media only screen and (max-width: 720px){
    .gameplay{
      .gameplay-heading{
        position: unset;
      }
      .gameplay-content{
        .gameplay-item{
          height: 300px;
          .gameplay-intro{
            left: 50%;
            transform: translateX(-50%);
          }
        }
      }
    }

  .image{
    width: 43px;
  }
}


  @media only screen and (max-width: 576px){
    .gameplay{
      .gameplay-content{
        .gameplay-item{
          .gameplay-intro{
            padding: 16px;
            width: 300px;
            height: 151.83px;
            p.heading{
              font-size: 16px;
              margin: 0px 0px 8px 0px;
            }
            p{
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }

    .image{
      margin: 20px 0px;
    }
  }

`;

export default GamePlayWrapper;