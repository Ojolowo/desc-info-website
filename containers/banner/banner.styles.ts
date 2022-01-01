import styled from "styled-components";
import { responsive } from "theme/responsive";
import { globalPadding } from "theme/spacing";

export const BannerWrapper = styled.div`
   background: ${({ theme }) => theme.primaryBackground};
   color: ${({ theme }) => theme.secondaryText};
   display: grid;
   grid-template-columns: 40% 60%;
   height: 95vh;
   padding: ${globalPadding};

   ${responsive("$small")`
        grid-template-columns: repeat(1, 1fr);  
    `}
`;

export const LeftContent = styled.div`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   justify-content: center;

   & > * + * {
      margin-top: 1em;
   }
`;

export const RightContent = styled.div`
   display: flex;
   align-items: center;
   justify-content: center;

   ${responsive("$small")`
        display: none;
    `}
`;
