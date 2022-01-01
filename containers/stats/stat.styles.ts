import styled from "styled-components";
import { responsive } from "theme/responsive";

export const StatsWrapper = styled.section`
   background: ${({ theme }) => theme.statsBg};
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   padding: 3.5em 2em;
   margin-top: 2.5em;

   ${responsive("$small")`
        grid-template-columns: repeat(1, 1fr);
    `}

   .video-player-container {
      display: flex;
      justify-content: center;

      .video-frame {
         border: none;
         border-radius: 20px;
      }
   }
`;

export const StatsInfoArea = styled.div`
   padding: 1.5em 0;
   display: grid;
   grid-template-columns: repeat(2, 1fr);
`;

export const InfoUnit = styled.div`
   display: inline-block;
   margin-bottom: 10px;
   opacity: 0.5;
   max-width: 100%;

   .stats-text {
      color: ${({ theme }) => theme.statsText};
      font-size: 12px;
   }

   .stats-text-large {
      font-size: 36px;

      ${responsive("$small")`
        font-size: 24px;
        
    `}
   }
`;
