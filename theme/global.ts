import { createGlobalStyle, DefaultTheme } from "styled-components";

export const GlobalStyles = createGlobalStyle<{ theme: DefaultTheme }>`
  body {
    background: ${({ theme }) => theme.primaryBackground};
    color: ${({ theme }) => theme.secondaryText};
font-family: Poppins, sans-serif;
    transition: all 0.50s linear;
  }
`;

declare module "styled-components" {
   export interface DefaultTheme {
      link: string;
      primaryBackground: string;
      secondaryText: string;
      secondaryBackground: string;
      primaryText: string;
      footerBackground: string;
      textBrief: string;
      nav: string;
      statsBg: string;
      statsText: string;
      toggler: string;
      card: string;
      testimonials: string;
   }
}
