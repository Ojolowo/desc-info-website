import styled from "styled-components";
import { responsive } from "theme/responsive";

export const InputWrapper = styled.div`
   margin: 20px 0;

   ${responsive("$medium")`
   display: grid;
   grid-template-columns: repeat(1, 1fr);
   row-gap: 20px;
   width: 100%;
`}

   &.mt-13 {
      margin: 13px 0 0;
      &:first-of-type {
         margin: 0;
      }
   }

   &.mt-15 {
      margin: 15px 0 0;
      &:first-of-type {
         margin: 0;
      }
   }

   &.grid-2-2 {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 20px;

      ${responsive("$medium")`
         display: grid;
         grid-template-columns: repeat(1, 1fr);
         row-gap: 20px;
         width: 100%;
      `}
   }
`;
