import React from "react";
import { Button } from "components/button";
import { FeatureCard, FeaturesWrapper } from "./feature.styles";
import { features } from "./features.utils";

const Features = () => {
   return (
      <FeaturesWrapper>
         <div className="cards">
            {features.map((el, i) => (
               <FeatureCard key={i}>
                  <h4 className="title">{el.title}</h4>
                  <p className="body-text">{el.body}</p>
                  <div className="icon">{el.icon}</div>
               </FeatureCard>
            ))}
         </div>
         <div className="summary">
            <div className="content">
               <h3 className="title">You are a plus to the community</h3>
               <p className="body">
                  Building the biggest network of creatives to connect, learn and grow together as
                  one.Building the biggest network of creatives to connect, learn and grow.Building
                  the biggest network of creatives to connect, learn and grow together as
                  one.Building the biggest network of creatives to connect, learn and grow.
               </p>
               <Button variant="outline" size="regular" width="202">
                  JOIN DESC
               </Button>
            </div>
         </div>
      </FeaturesWrapper>
   );
};

export { Features };
