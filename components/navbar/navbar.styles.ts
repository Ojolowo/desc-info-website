import styled from "styled-components";
import { navPadding } from "theme/spacing";

export const NavbarWrapper = styled.header`
   // min-height: 10vh;

   .overlay {
      position: absolute;
      top: 0;
      height: 100%;
      width: 100%;
      background: rgba(0, 0, 0, 0.4);
      z-index: 1000;
   }

   .toggled .line1 {
      transform: rotate(-45deg) translate(-5px, 6px);
   }
   .toggled .line2 {
      opacity: 0;
   }
   .toggled .line3 {
      transform: rotate(45deg) translate(-3px, -6px);
   }

   .link {
      color: white;
      text-decoration: none;
   }

   .mobile-nav-links {
      position: fixed;
      top: 0;
      bottom: 0;
      right: 0;
      width: 0;
      overflow: hidden;
      background: ${({ theme }) => theme.nav};
      padding: 100px 0px 20px 0px;
      display: flex;
      flex-direction: column;
      align-items: center;
      z-index: 1500;
      transition: all 300ms ease-in-out;
      color: white;
      list-style-type: none;
      box-sizing: border-box;

      & > * + * {
         margin-top: 3em;
      }

      a {
         color: ${({ theme }) => theme.link};
         text-decoration: none;
      }
   }

   &.active {
      .mobile-nav-links {
         width: 45%;
      }
   }
   .large-nav-links {
      display: none;
   }
   .navbar {
      background: ${({ theme }) => theme.nav};
      padding: ${navPadding};
      display: flex;
      justify-content: space-between;
      align-items: center;
      width: 100%;
      position: fixed;
      top: 0;
      z-index: 50;

      ul {
         list-style: none;
      }

      li {
         font-size: 14px;

         a {
            color: ${({ theme }) => theme.link};
            text-decoration: none;
            cursor: pointer;
         }
      }

      button {
         display: none;

         @media screen and (min-width: 992px) {
            display: block;
         }
      }
   }

   .more-icon {
      z-index: 20000;
      position: fixed;
      cursor: pointer;
      right: 3em;
      height: 57px;
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 0 10px;
      .burger {
         margin-top: 10px;
         div {
            width: 20px;
            height: 2px;
            margin-bottom: 5px;
            background: ${({ theme }) => theme.toggler};
            transition: all 0.3s ease;
         }
      }
   }

   @media screen and (min-width: 768px) {
      .navbar .logo {
         margin-right: 114px;
      }

      .more-icon {
         .burger {
            display: none;
         }
      }

      .large-nav-links {
         display: flex;
         align-items: center;

         & > * {
            margin: 0 1em;
         }
      }
   }
`;
