import styled from "styled-components";
import { colors } from "theme/colors";
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

export const BorderedText = styled.h1<{ size: number }>`
   font-size: ${({ size }) => size}px;
   color: ${colors.primary};
   text-shadow: -1px -1px 0 ${colors.white}, 1px -1px 0 ${colors.white}, -1px 1px 0 ${colors.white},
      1px 1px 0 ${colors.white};
`;

export const TextBlock = styled.div`
   display: block;
   margin: 2em 0;
`;
