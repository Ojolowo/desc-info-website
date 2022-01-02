import styled from "styled-components";

export const GalleryWrapper = styled.div`
   width: 100%;
   background: ${({ theme }) => theme.primaryBackground};
   padding-bottom: 2em;
`;

export const TextsWrapper = styled.div`
   display: flex;
   flex-direction: column;
   align-items: center;
   text-align: center;
   padding-top: 110px;

   .title-text {
      max-width: 553px;
   }

   .sub-heading-sm {
      padding-top: 20px;
      padding-bottom: 90px;
   }
`;

export const GalleryItem = styled.main`
   width: 100%;
   padding: 0 20px;
   display: flex;
   gap: 1.5em;
   flex-wrap: wrap;
   justify-content: center;

   & > * {
      margin: 1em;
   }

   & .gallery-img {
      max-width: 300px;
      height: auto;
      margin: 10px;

      @media screen and (min-width: 768px) {
         max-width: 652px;
         height: auto;
         margin: 10px;
      }

      @media screen and (min-width: 992px) {
         max-width: 100%;
      }
   }
`;
