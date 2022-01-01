import styled from "styled-components";
import { normal } from "theme/font-weights";
import { responsive } from "theme/responsive";

export const TextHeading = styled.h1<{ size: number; weight: number }>`
   font-weight: ${({ weight }) => weight};
   font-size: ${({ size }) => size}px;
   color: ${({ theme }) => theme.primaryText};
   line-height: 1;
   max-width: 446px;

   ${responsive("$small")`
        font-size: 36px;
        max-width: 300px;
    `}
`;

export const TextBrief = styled.p`
   font-size: 18px;
   font-weight: ${normal};
   color: ${({ theme }) => theme.textBrief};
   max-width: 388px;
   line-height: 1.7;
`;
