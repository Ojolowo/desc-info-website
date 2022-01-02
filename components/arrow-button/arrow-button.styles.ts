import styled from "styled-components";

export const ArrowLink = styled.a`
   all: unset;
   appearance: auto;

   display: inline-flex;
   text-decoration: none;
   font-weight: 500;
   line-height: 24px;
   color: #000000;
   gap: 10px;
   transition: all 300ms ease;
   min-width: 100px;
   align-items: center;

   &:hover {
      gap: 15px;
      cursor: pointer;
   }

   &:focus {
      text-decoration: underline;
   }
`;
