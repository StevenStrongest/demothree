import styled from 'styled-components';
import background from 'assets/images/team/background.jpg';

const OurTeamWrapper = styled.div`
    margin-top: 120px;
    width: 100%;
    height: 727px;
    background: url(${background});
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    .overlay{
        width: 100%;
        height: 100%;
        background: rgba(9, 30, 66, 0.7);
        .team-heading{
            h1{
                padding-top: 42px;
                text-align: center;
                position: relative;
                &:after{
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                }
            }
        }
    }

    .team-content{
        .row{
            margin-top: 74px;
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            text-align: center;
            &.screen-md{
                display: none;
            }
            .team-item{
                width: 200px;
                height: 168px;
                img{
                    margin: 8px auto;
                }
                p.heading{
                    font-size: 24px;
                    line-height: 26px;
                    font-weight: 700;
                    color: #ffffff;
                    text-transform: capitalize;
                }
                P{
                    margin: 0;
                    padding: 0;
                }
            }
        }
    }

    @media only screen and (max-width: 992px){
        height: 880px;
        .overlay{
            .team-content{
                .row{
                    display: none;
                    padding-right: 0;
                    padding-left: 0;
                    &.screen-md{
                        display: flex;
                    }
                    .team-item{
                        margin-bottom: 72px;
                    }
                }
            }
        }
    }

    @media only screen and (max-width: 768px){
        height: 1100px;
    }

    @media only screen and (max-width: 440px){
        height: 840px;
        .overlay{
            .team-content{
                .row{
                    .team-item{
                        width: 150px;
                        height: 84px;
                        p.heading{
                            font-size: 16px;
                        }
                        p{
                            font-size: 14px;
                        }
                    }
                }
            }
        }
    }
`;

export default OurTeamWrapper;
