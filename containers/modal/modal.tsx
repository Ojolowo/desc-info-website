import React, { FC } from "react";
import { BackDrop } from "containers/backdrop";
import { IModal } from "./i-modal";
import { ModalBox } from "./modal.styles";
import { DropInVariants } from "./modal.variants";

const CustomModal: FC<IModal> = ({ children, handleClose }) => {
   return (
      <BackDrop onClick={handleClose}>
         <ModalBox
            onClick={(e) => e.stopPropagation()}
            variants={DropInVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
         >
            {children}
         </ModalBox>
      </BackDrop>
   );
};

export { CustomModal };
