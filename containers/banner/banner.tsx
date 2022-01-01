import React from "react";
import Image from "next/image";
import Community from "assets/images/community.svg";
import { Button } from "components/button";
import { TextHeading, TextBrief } from "components/typography";
import { BannerWrapper, LeftContent, RightContent } from "./banner.styles";

const Banner = () => {
   return (
      <BannerWrapper>
         <LeftContent>
            <TextHeading size={72} weight={600}>
               Join The Community
            </TextHeading>
            <TextBrief>
               Building a network of techies & creatives to connect, learn and grow
            </TextBrief>
            <Button variant="primary" size="regular" width="202">
               JOIN THE COMMUNITY
            </Button>
         </LeftContent>
         <RightContent>
            <Image src={Community} alt="Community" />
         </RightContent>
      </BannerWrapper>
   );
};

export { Banner };
