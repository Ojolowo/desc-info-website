import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import Image from "next/image";
import Community from "assets/images/community.svg";
import { Button } from "components/button";
import { TextHeading, TextBrief } from "components/typography";
import { JoinForm } from "containers/form";
import { CustomModal } from "containers/modal";
import { BannerWrapper, LeftContent, RightContent } from "./banner.styles";

const Banner = () => {
   const [isOpen, setIsOpen] = useState(false);

   const handleOpen = () => setIsOpen(true);
   const handleClose = () => setIsOpen(false);

   return (
      <BannerWrapper>
         <AnimatePresence initial={false} exitBeforeEnter={true} onExitComplete={() => null}>
            {isOpen && (
               <CustomModal handleClose={handleClose}>
                  <JoinForm />
               </CustomModal>
            )}
         </AnimatePresence>
         <LeftContent>
            <TextHeading size={72} weight={600}>
               Join The Community
            </TextHeading>
            <TextBrief>
               Building a network of techies & creatives to connect, learn and grow
            </TextBrief>
            <Button variant="primary" size="regular" width="202" onClick={handleOpen}>
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
