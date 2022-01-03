import styled from "styled-components";

export const EventsWrapper = styled.section<{ url: string }>`
   display: flex;
   justify-content: center;
   margin: 100px 30px 0px 30px;
   padding-bottom: 100px;

   .newsletter-background {
      max-width: 800px;
      background-image: url(${({ url }) => url});
      background-repeat: no-repeat;
      background-position: center;
      background-size: cover;
      border-radius: 30px;
      width: 100%;
      padding: 6% 20px;

      @media screen and (min-width: 992px) {
         padding: 6% 30px;
      }

      .newsletter-h1 {
         font-weight: 600;
         font-size: 32px;
         line-height: 40px;
         letter-spacing: -0.02em;
         color: #ffffff;
      }

      .newsletter-p {
         font-weight: normal;
         font-size: 14px;
         line-height: 30px;
         letter-spacing: -0.02em;
         color: #ffffff;
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
            // width: 160px;
            min-width: 50%;
            padding-left: 20px;
            font-size: 16px;
            border-radius: 30px;
            flex: 1;
         }

         .newsletter__submit-button {
            background-color: #0045ac;
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
