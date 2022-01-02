import styled from "styled-components";
import { globalPadding } from "theme/spacing";

export const TeamWrapper = styled.div`
   background: ${({ theme }) => theme.gallery};

    .row {
        display: flex;
        flex-direction: column-reverse;
    }

   @media screen and (min-width: 768px){
    .row {
        display: flex;
        flex-direction: row;
      }
   }

   .team-member {
      color: ${({ theme }) => theme.primaryText};
      padding: 30px;
      text-align: center;

      @media screen and (min-width: 768px){
        padding: 30px ${globalPadding};
        align-items: center;
        text-align: left;
        &:nth-child(even) {
          flex-direction: row-reverse;
        }

        .column {
            width: 50%;
            padding: 0px 2%;
        }
        }
    }

      .info {
         margin-bottom: 20px;
      }
      .name {
         line-height: 40px;
      }
      .role {
         font-size: 12px;
      }
      .profile {
         color: ${({ theme }) => theme.textBrief};
         font-size: 14px;
         padding: 15px 0;
         line-height: 25px;
      }
      .image-container {
         display: flex;
         justify-content: center;
         align-items: center;
      }
      .image {
         max-width: 440px;
         width: 100%;
         height: 400px;
         border-radius: 10px;
         background-position: top center;
         background-repeat: no-repeat;
         background-size: cover;
         margin-bottom: 1em;
      }
   }
`;

export const TextsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 140px;
   padding-bottom: 0;
   background: ${({ theme }) => theme.teamHeader};

   .title-text {
      max-width: 750px;

      @media screen and (max-width: 478px) {
         max-width: 350px;
      }
   }

   .sub-heading-sm {
      padding-top: 20px;
      padding-bottom: 90px;
      max-width: 400px;
   }
`;
