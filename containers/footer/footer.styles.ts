import styled from "styled-components";
import { colors } from "theme/colors";
import { globalPadding } from "theme/spacing";

export const FooterWrapper = styled.footer`
   padding: ${globalPadding};
   background: ${colors.mainBlue};
   display: flex;
   justify-content: space-between;
   align-items: center;

   @media screen and (max-width: 478px) {
      flex-direction: column;
      grid-gap: 2em;
   }
`;

export const Socials = styled.ul`
   display: flex;
   align-items: center;
   list-style: none;

   & > * + * {
      margin-left: 2em;
   }

   & li {
      cursor: pointer;
   }
`;
