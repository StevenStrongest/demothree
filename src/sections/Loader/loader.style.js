import styled from 'styled-components';

const LoaderWrapper = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   z-index: 99999;
   &.hide{
       display: none;
   }
   div{
        img{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        }
   }
`;

export default LoaderWrapper;