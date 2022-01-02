import React from "react";
import { ArrowLink } from "./arrow-button.styles";

const ArrowButton = ({ text, color = "#000000", onClick, textStyle = {}, href, target }) => {
   return (
      <>
         {href ? (
            <ArrowLink href={href} target={target} style={{ color, ...textStyle }}>
               <p>{text}</p>
               <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill={color}
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M4.37114e-07 7L14.17 7L10.585 10.585L12 12L18 6L12 -5.24537e-07L10.585 1.415L14.17 5L6.11959e-07 5L4.37114e-07 7Z"
                     fill={color}
                  />
               </svg>
            </ArrowLink>
         ) : (
            <button onClick={onClick} className="arrow-link" style={{ color, ...textStyle }}>
               <p>{text}</p>
               <svg
                  width="18"
                  height="12"
                  viewBox="0 0 18 12"
                  fill={color}
                  xmlns="http://www.w3.org/2000/svg"
               >
                  <path
                     d="M4.37114e-07 7L14.17 7L10.585 10.585L12 12L18 6L12 -5.24537e-07L10.585 1.415L14.17 5L6.11959e-07 5L4.37114e-07 7Z"
                     fill={color}
                  />
               </svg>
            </button>
         )}
      </>
   );
};

export { ArrowButton };
