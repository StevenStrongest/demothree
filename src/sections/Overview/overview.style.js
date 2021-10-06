import styled from 'styled-components';

const OverviewWrapper = styled.div`
margin-top: 88px;
   .overview{
       display: flex;
       justify-content: space-between;
        .overview-heading{
            position: relative;
            width: 29.40%;
            .background-heading{
                position: absolute;
                top: -90px;
                left: -70px;
                z-index: -1;
            }
        }

        .overview-img{
            position: relative;
            .background-right{
                position: absolute;
                top: -20%;
                right: 0;
                z-index: -1;
                width: 80%;
            }
        }
   }
   
   @media only screen and (max-width: 1200px){
       .overview{
           .overview-img{
               margin-left: 20px;
           }
       }
   }

   @media only screen and (max-width: 850px){
       .overview{
          flex-direction: column;
          .overview-heading{
              width: 100%;
          }
          .overview-img{
               margin: auto;
           }
       }
   }
`;

export default OverviewWrapper;