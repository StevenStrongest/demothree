import styled from 'styled-components';

const GameAssetsWrapper = styled.div`
margin-top: 190px;
    .gameassets-heading{
        text-align: center;
    }
    .gameassets-content{
        margin-top: 66px;
       .row{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        &.md-screen{
            display: none;
        }
        .content-item{
            width: 410px;
            height: 406px;
            clip-path: polygon(8% 0, 100% 0%, 92% 100%, 0% 100%);
            padding: 0px 50px;
            background: rgba(41,55,97, .2);
            margin-bottom: 30px;
            text-align: center;
            background-position: top center;
            position: relative;
            transform-style: preserve-3d;
            &:before{
                content: '';
                position: absolute;
                top: -10px;
                right: -41px;
                width: 0; 
                height: 0; 
                transform: rotate(45deg);
                border-left: 65px solid transparent;
                border-right: 65px solid transparent;
                border-bottom: 65px solid ${props => props.theme.primaryColor};
            }
            &:after {
                content: '';
                position: absolute;
                width: 100%;
                height: 5px;
                border-radius: 50%;
                left: 0;
                bottom: 0px;
                box-shadow: 0 30px 20px rgba(0, 0, 0, .3);
            }
            &:hover{
                clip-path: unset;
                &:hover .card-content{
                    img{
                        transform: translate3d(0, 0, 100px);
                    }
                }

            }
            .card-content{
                transform-style: preserve-3d;
                    .imgage{
                    width: 50.9%;
                    margin: auto;
                    height: 122px;
                    &:after{
                        content: "";
                        width: 200px;
                        height: 50px;
                        border-radius: 50%;
                        display: block;
                        position: absolute;
                        left: 50%;
                        top: 35%;
                        transform: translateX(-50%);
                        background: rgba(0, 0, 0, .5);
                        box-shadow: 1px 1px  10px rgba(0, 0, 0, .4);
                        z-index: -1;
                    }
                    img{
                        margin: 38px auto 0px;
                        transform: translate3d(0, 0, 0px);
                        position: relative;
                    }
                }
                .content-intro{
                    p.heading{
                        font-size: 20px;
                        font-weight: 700;
                        line-height: 30px;
                        margin-top: 60px;
                        color: #ffffff;
                    }
                }
            }
            
          }
       }
    }

    @media only screen and (max-width: 1400px){
        .gameassets-content{
            .row{
                display: none;
                &.md-screen{
                    display: flex;
                }
            }
        }
    }

    @media only screen and (max-width: 576px){
        margin-top: 100px;
    }

    @media only screen and (max-width: 405px){
        .gameassets-content{
            .row{
                .content-item{
                    height: auto;
                    clip-path: unset;
                    border-radius: 20px;
                }
            }
        }
    }
`;

export default GameAssetsWrapper;