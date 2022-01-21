import React, { FC } from "react";
import { BackdropBox } from "./backdrop.styles";
import { IBackDrop } from "./i-backdrop";

const BackDrop: FC<IBackDrop> = ({ children, onClick }) => {
   return (
      <BackdropBox
         onClick={onClick}
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
      >
         {children}
      </BackdropBox>
   );
};

export { BackDrop };
