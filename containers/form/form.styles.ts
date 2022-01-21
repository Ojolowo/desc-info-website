import styled from "styled-components";
import { colors } from "theme/colors";
import { responsive } from "theme/responsive";

export const FormWrapper = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   border-radius: 5px;
   width: 100%;

   .left {
      background-color: ${colors.primary};
   }

   form {
      padding: 20px 30px;
      height: 85vh;
      overflow-y: scroll;
   }

   ${responsive("$small")`
    grid-template-columns: repeat(1, 1fr);  

    & .left {
        display: none;
    }
`}
`;

export const Svg = styled.div<{ src: string }>`
   background-image: url(${({ src }) => src});
   background-size: cover;
   width: 100%;
   height: 100%;
`;
