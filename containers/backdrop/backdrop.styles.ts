import { motion } from "framer-motion";
import styled from "styled-components";
import { colors } from "theme/colors";

export const BackdropBox = styled(motion.div)`
   position: absolute;
   z-index: 100;
   top: 0;
   left: 0;
   height: 100%;
   width: 100%;
   background: ${colors.black};
   display: flex;
   align-items: center;
   justify-content: center;
`;
