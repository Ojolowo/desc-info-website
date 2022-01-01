import styled from "styled-components";

export const ConnectWrapper = styled.section<{ url: string }>`
   color: white;
   padding: 40px 30px;
   background-image: url(${({ url }) => url});
   background-size: cover;
   background-position: center;
   background-repeat: no-repeat;
   text-align: center;
   height: 50vh;
   min-height: 500px;
   display: flex;
   flex-direction: column;
   align-items: center;

   .title {
      font-size: 36px;
   }
   .sub-title {
      font-size: 12px;
   }

   @media screen and (min-width: 992px) {
      height: 100vh;
   }
`;
