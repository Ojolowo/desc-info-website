import React from "react";
import { StatsWrapper, StatsInfoArea, InfoUnit } from "./stat.styles";
import { stats } from "./stat.utils";

const Stats = () => {
   return (
      <StatsWrapper>
         <StatsInfoArea>
            {stats.map((el, i) => (
               <InfoUnit key={i}>
                  <h3 className="stats-text stats-text-large">{el.label}</h3>
                  <p className="stats-text">{el.small}</p>
               </InfoUnit>
            ))}
         </StatsInfoArea>
         <div className="video-player-container">
            <iframe
               title="Video"
               className="video-frame"
               width="100%"
               height="315"
               src="https://www.youtube.com/embed/sL3kLxsy-Lg?autoplay=0&mute=0"
            ></iframe>
         </div>
      </StatsWrapper>
   );
};

export { Stats };
