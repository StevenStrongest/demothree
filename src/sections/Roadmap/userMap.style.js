import styled from "styled-components";

const UserMapWrapper = styled.div`
margin-top: 100px;
  .roadmap-heading{
    margin-bottom: 90px;
    text-align: right;
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
`;

export default UserMapWrapper;
