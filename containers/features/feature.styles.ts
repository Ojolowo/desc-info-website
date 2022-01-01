import styled from "styled-components";
import { globalPadding } from "theme/spacing";

export const FeaturesWrapper = styled.section`
   padding: ${globalPadding};
   display: flex;
   flex-direction: column-reverse;
   position: relative;

   @media screen and (min-width: 768px) {
      flex-direction: row;
      padding: ${globalPadding};
      margin-top: 60px;
      align-items: center;
      justify-content: flex-start;
   }

   .cards {
      flex: 1;

      @media screen and (min-width: 992px) {
         position: relative;
         display: flex;
         justify-content: flex-end;
         flex-wrap: wrap;
         gap: 20px;
      }

      @media screen and (min-width: 768px) {
         flex: 1;
      }
   }

   .summary {
      padding-bottom: 20px;
      flex: 1;
      padding-left: 5%;
      margin-bottom: 50px;

      @media screen and (max-width: 768px) {
         flex: 1;
         padding-left: 5%;
      }

      .title {
         color: ${({ theme }) => theme.primaryText};
         font-size: 32px;
         margin-bottom: 10px;
      }

      .body {
         color: ${({ theme }) => theme.secondaryText};
         font-size: 16px;
         margin-bottom: 20px;
      }
   }
`;

export const FeatureCard = styled.div`
   background: ${({ theme }) => theme.card};
   border-radius: 10px;
   padding: ${globalPadding};
   width: 100%;
   position: relative;
   margin-bottom: 2em;

   .title {
      color: ${({ theme }) => theme.primaryText};
      font-size: 20px;
      margin-bottom: 10px;
      line-height: 25px;
   }

   .body-text {
      color: ${({ theme }) => theme.secondaryText};
      font-size: 14px;
   }

   .icon {
      width: 45px;
      height: 45px;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      position: absolute;
   }

   &:nth-child(1) .icon {
      top: -20px;
      background-color: #3183ff;
   }
   &:nth-child(2) .icon {
      top: 30px;
      right: -23px;
      background-color: #faaa00;
   }
   &:nth-child(3) .icon {
      top: 50px;
      left: -23px;
      background-color: #ff3131;
   }

   @media screen and (min-width: 992px) {
      width: 45%;
      margin-bottom: 0;

      &:nth-child(1) {
         top: 60px;
      }

      .body-text {
         font-size: 13px;
      }
   }
`;
