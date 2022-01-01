import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.secondaryText};
font-family: Poppins, sans-serif;
    transition: all 0.50s linear;
  }
`;
