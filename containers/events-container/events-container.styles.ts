import styled from "styled-components";
import { globalPadding } from "theme/spacing";

export const EventsWrapper = styled.section`
   display: flex;
   height: 90vh;
   justify-content: center;
   padding: 100px ${globalPadding};
   padding-bottom: 0;
   background: ${({ theme }) => theme.primaryBackground};

   .newsletter-background {
      width: 100%;
      border-radius: 30px;
      padding: 6% 20px;
      max-width: 800px;

      @media screen and (min-width: 992px) {
         padding: 6% ${globalPadding};
         display: flex;
         flex-direction: column;
         align-items: center;
      }

      .newsletter-h1 {
         font-weight: 600;
         font-size: 32px;
         line-height: 40px;
         letter-spacing: -0.02em;
         color: ${({ theme }) => theme.primaryText};
      }

      .newsletter-p {
         font-weight: normal;
         font-size: 16px;
         line-height: 30px;
         letter-spacing: -0.02em;
         color: ${({ theme }) => theme.textBrief};
         opacity: 0.8;
      }

      .newsletter__button-container {
         background-color: #ecf1f4;
         height: 52px;
         border-radius: 30px;
         margin-top: 60px;
         display: flex;

         @media screen and (min-width: 992px) {
            width: 65%;
         }

         .newsletter__input-text {
            background: #ecf1f4;
            outline: none;
            border: none;
            min-width: 50%;
            padding-left: 20px;
            font-size: 16px;
            border-radius: 30px;
            flex: 1;
         }

         .newsletter__submit-button {
            background-color: #3183ff;
            border-radius: 20px;
            height: 40px;
            border: none;
            color: white;
            font-weight: 800;
            font-size: 12px;
            line-height: 18px;
            letter-spacing: 0.04em;
            text-transform: uppercase;
            margin: 6px;
            max-width: 40%;
            display: flex;
            justify-content: center;
            align-items: center;
            width: 130px;
         }
      }
   }
`;
