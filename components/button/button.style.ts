import styled, { css } from "styled-components";
import { colors } from "theme/colors";
import { medium, bold } from "theme/font-weights";
import { IButtonEmotionProps } from "./i-button";

function variantButtonStyles({ variant }: IButtonEmotionProps) {
   switch (variant) {
      case "outline":
         return css`
            color: #3183ff;
            background: none;
            border: 1px solid ${colors?.primary};

            &:hover,
            &:active {
               opacity: 0.8;
            }

            &:disabled,
            &:disabled:active,
            &:disabled:hover {
               color: ${colors?.grey};
               cursor: not-allowed;
            }
         `;
      default:
      case "primary":
         return css`
            color: ${colors.white};
            background-color: ${colors?.primary};

            &:hover,
            &:active {
               color: ${colors?.white};
               background-color: ${colors?.primary};
               opacity: 0.8;
            }

            &:disabled,
            &:disabled:active,
            &:disabled:hover {
               color: ${colors?.white};
               border-color: ${colors?.grey};
               background-color: ${colors?.primary};
               cursor: not-allowed;
               opacity: 0.4;
            }
         `;
   }
}

export const ButtonStyledComponent = styled.button`
   border: 0;
   padding: 0;
   cursor: pointer;
   box-sizing: border-box;
   display: inline-block;
   max-width: 100%;
   text-align: center;
   overflow: hidden;
   width: ${({ width }) => width};
   white-space: nowrap;
   text-overflow: ellipsis;
   font-size: ${({ size }) => (size === "small" ? "1rem" : "1rem")};
   letter-spacing: 0;
   line-height: 1.6rem;
   border-radius: 50px;
   text-transform: capitalize;
   transition: all 300ms ease-in-out;
   background-color: ${colors?.grey};
   color: ${colors?.grey};
   font-weight: ${bold};
   display: flex;
   justify-content: center;
   align-items: center;
   padding: ${({ size }) => {
      switch (size) {
         case "small":
            return "1rem 1.4rem;";
         default:
            return "1rem 2.4rem;";
      }
   }};

   ${({ fullWidth }) =>
      fullWidth &&
      css`
         width: 100%;
      `};

   ${variantButtonStyles}
`;
