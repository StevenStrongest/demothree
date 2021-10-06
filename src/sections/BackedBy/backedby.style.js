import styled from 'styled-components';

const BackedByWrapper  = styled.div`
margin-top: 120px;
margin-bottom: 120px;
    .backed-heading{
        text-align: center;
    }

    .backed-content{
        margin-top: 86px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
    }

    .backed-slide{
        height: 286px;
        margin-top: 86px;
        display: none;
        .box-logo{
           width: 400px;
           height: 200px;
           margin: auto;
           position: relative;
           box-shadow: inset 5px 5px 5px rgba(0, 0, 0, 0.2),
            inset -5px -5px 15px rgba(255, 255, 255, 0.1),
            5px 5px 15px rgba(0, 0, 0, 0.3), -5px -5px 15px rgba(255, 255, 255, 0.1);
            border-radius: 15px;
            img{
                margin: auto;
                position: absolute;
                top: 50%;
                left: 50%;
                width: 80%;
                transform: translate(-50%, -50%);
                &#i1{
                    width: 30%;
                }
            }
       }
    }

    .slick-arrow{
    position: absolute;
    width: 64px;
    top: calc(50% + (-40px));
    left: 50%;
    transform: translateX(-50%);
    transform: translateY(-50%);
    margin: 40px 0px;
    &.slick-prev{
      left: 0
    }
    &.slick-next{
      left: calc(100% + (-65px));
    }
  }

  .slick-list{
      padding: 10px 0px;
  }


    @media only screen and (max-width: 1200px){
        .backed-content{
            justify-content: center;
            .backed-item:not(:last-child):not(:nth-last-child(2)){
                margin-right: 83px;
            }
        }
    }

    @media only screen and (max-width: 992px){
        .backed-content{
            display: none;
        }

        .backed-slide{
            display: block;
        }
    }

    @media only screen and (max-width: 420px){
        margin-bottom: 0;
        .backed-slide{
            .box-logo{
                width: 300px;
                height: 150px;
            }
        }
    }
`;

export default BackedByWrapper;