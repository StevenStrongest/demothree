import styled from 'styled-components';

const NavMobieWarpper = styled.div`

display: none;
    .overlay{
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: #ffffff;
        z-index: 999;
        opacity: 1;
        transition: 0.5s;
    }
    .nav-left{
        position: absolute;
        left: 50px;
        top: 25%;
        ul{
            width: 250px;
            li{
                margin-bottom: 20px;
                display: flex;
                align-items: center;
                .icon{
                    width: 50px;
                    height: 50px;
                    border-radius: 50%;
                    background: #0e141b;
                    position: relative;
                    svg{
                        color: #ffffff;
                        font-size: 20px;
                        position: absolute;
                        top: 50%;
                        left: 50%;
                        transform: translate(-50%, -50%);
                    }
                }
                .text{
                    color: #0e141b;
                    margin-left: 10px;
                    p{
                        margin: 0;
                        line-height: 20px;
                    }
                    .heading{
                        font-weight: 700;
                        &+p{
                            font-size: 13px;
                        }
                    }
                }
            }
        }
    }
    .nav-mobie{
        cursor: pointer;
        position: fixed;
        z-index: 99999;
        right: 20px;
        top: 60%;
        width: 50px;
        height: 50px;
        background: #0e141b;
        border-radius: 50%;
        border: 1px solid rgb(255,255,255);
        box-shadow: rgba(255, 255, 255, 0.3) 0px 0px 0px 3px;
        animation: scale 1s linear;
        &.active{
            animation-iteration-count: infinite;
        }
        .background{
            content: "";
            width: 0px;
            height: 0px;
            position: absolute;
            top: 50%;
            left: 50%;
            border-radius: 50%;
            transform: translate(-50%, -50%);
            background: #0e141b;
            z-index: -1;
            transition: 0.5s;
            &.active{
                width: 300px;
                height: 300px;
            }
        }
        .menu-toggle{
            opacity: 0;
            position: absolute;
            &+label{
                cursor: pointer;
                width: 20px;
                height: 2.5px;
                display: block;
                z-index: 1;
                border-radius: 3px;
                background: #ffffff;
                transition: 0.5s;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                &::after,&::before{
                    width: 20px;
                    height: 2.5px;
                    display: block;
                    z-index: 1;
                    border-radius: 3px;
                    background: #ffffff;
                    transition: 0.5s;
                    content: "";
                    position: absolute;
                    left: 0;
                }
                &::before{
                    top:6px;
                }
                &::after{
                    top: -6px;
                }
            }
            &:checked+label{
                background: transparent;
                &::after, &::before{
                    top: 0;
                    width: 20px;
                    transform-origin: 50% 50%;
                }
                &::before{
                    transform: rotate(45deg);
                }
                &::after{
                    transform: rotate(-45deg);
                }
            }
            &:checked~ul .menu-item{
                opacity: 1;
                &:nth-child(1){
                    transform: rotate(-105deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(105deg);
                        opacity: 1;
                    }
                }
                &:nth-child(2){
                    transform: rotate(-135deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(135deg);
                        opacity: 1;
                    }
                }
                &:nth-child(3){
                    transform: rotate(-165deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(160deg);
                        opacity: 1;
                    }
                }
                &:nth-child(4){
                    transform: rotate(-195deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(195deg);
                        opacity: 1;
                    }
                }
                &:nth-child(5){
                    transform: rotate(-225deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(225deg);
                        opacity: 1;
                    }
                }
                &:nth-child(6){
                    transform: rotate(-255deg) translateX(100px);
                    svg{
                        transform: translate(-50%, -50%) rotate(255deg);
                        opacity: 1;
                    }
                }
            }
        }
        ul{
        .menu-item{
            position: absolute;
            display: block;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            margin: auto;
            width: 40px;
            height: 40px;
            background: transparent;
            border: 1px solid #ffffff;
            opacity: 0;
            transition: 0.5s;
            border-radius: 50%;
            text-align: center;
            svg{
                display: block;
                opacity: 0;
                color: #ffffff;
                font-size: 20px;
                width: 20px;
                height: 20px;
                pointer-events: none;
                transition: .2s;
                position: absolute;
                top: 50%;
                left: 50%;
                margin: auto;
                }
            }
        }
        @keyframes scale {
            25%{
                transform: scale(1);
            }
            50%{
                transform: scale(1.1);
            }
            75%{
                transform: scale(1.05);
            }
            100%{
                transform: scale(1);
            }
        }
    }
    @media only screen and (max-width: 640px){
        display: block;
    }
    @media only screen and (max-width: 380px){
        .nav-left{
            left: 10px;
        }
    }
`;

export default NavMobieWarpper;