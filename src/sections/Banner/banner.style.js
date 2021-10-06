import styled from 'styled-components';
import banner from 'assets/images/banner/banner.jpg'

const height_banner = '639.63px';
const shape_btn = `
clip-path: polygon(12% 0, 100% 0%, 88% 100%, 0% 100%);
`

const BannnerWrapper = styled.div`
    height: ${height_banner};
    width: 100%;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    position: relative;
    
    .overlay{
        width: 50%;
        height: 100%;
        background: linear-gradient(to right, rgba(5, 15, 42, 1) 25%, 
        rgba(5, 15, 41, 0.9),
        rgba(5, 15, 40, 0.8),
        rgba(5, 15, 38, 0.7),
        rgba(5, 15, 37, 0.6),
        rgba(5, 15, 36, 0.5),
        rgba(5, 15, 35, 0.4),
        rgba(5, 15, 34, 0.3),
        rgba(5, 15, 33, 0.2),
        rgba(5, 15, 32, 0.1),
        transparent);
        position: absolute;
        top: 0;
        left: 0;
    }

    .container{
        height: 100%;
    }

    .banner-content{
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        h1{
            font-size: 60px;
            line-height: 63px;
            margin: 0;
            padding: 0;
            overflow: hidden;
            white-space: nowrap;
            &.text-pri{
                &.animation{
                    animation: 
                    typing1 1.5s steps(40, end),
                    blink-caret .75s step-end infinite,
                    border1 4s;
                }
            }
            &.text-ani{
                &.animation{
                    animation: 
                    typing2 1.5s steps(40, end),
                    blink-caret .75s step-end infinite,
                    border2 5.5s;
                    animation-delay: 1.5s;
                }
            }

            &:not(.primaryColor){
                display: block;
            }
            &::after{
                display: none;
            }

            @keyframes border1{
                from{
                    border-right: 7px solid ${props => props.theme.primaryColor};
                }
                to{
                    border-right: unset;
                    animation-delay: 1.5s;
                }
            }

            @keyframes border2{
                from{
                    border-right: 7px solid #ffffff;
                }
                to{
                    border-right: unset;
                }
            }

            @keyframes typing1 {
                from { width: 0 }
                to { width: 100% }
            }
            @keyframes typing2 {
                from { width: 0 }
                to { width: 100% }
            }
        }

        p{
            margin-top: 10px;
        }

        button{
            font-weight: 700;
            width: 270px;
            background: ${props => props.theme.primaryColor};
            box-shadow: 0px 8px 20px rgba(152, 214, 239, 0.3);
           ${shape_btn}
            overflow: hidden;
            margin-left: 18px;
            margin-top: 40px;
            position: relative;
            transition: 0.5s;
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
                content: "Join now";
            }

            &::before{
                width: 100%;
                height: 100%;
                top: 0;
                left: 0;
                background: ${props => props.theme.primaryColor};
                opacity: 1;
                display: block;
                transition: 0.5s;
                position: relative;
                content: "Join now";
                transform: translateY(0) rotateX(0);
            }
        }
    }

    @media only screen and (max-width: 576px){
        .overlay{
            background: linear-gradient(to right, rgba(5, 15, 42, 0.3) 80%, 
            rgba(5, 15, 41, 0.6),
            rgba(5, 15, 40, 0.5),
            rgba(5, 15, 38, 0.4),
            rgba(5, 15, 37, 0.3),
            rgba(5, 15, 36, 0.2),
            rgba(5, 15, 35, 0.1),
            rgba(5, 15, 34, 0.09),
            rgba(5, 15, 33, 0.08),
            rgba(5, 15, 32, 0.0.07),
            transparent);
        }

        .banner-content{
            left: 50%;
            transform: translate(-50%, -50%);
            width: 85%;
            h1{
            font-size: 35px;
            line-height: 43px;
            margin: 0;
            padding: 0;
            }
        }
    }
`;

export default BannnerWrapper;