import { motion } from "framer-motion";
import styled, { css } from "styled-components";
import { colors } from "theme/colors";
import { IInputProps } from "./i-input";

export const Div = styled.div<{ fullWidth?: boolean | undefined }>`
   ${({ fullWidth }) => fullWidth && "width: 100%;"}
   position: relative;
   display: inline-block;
   width: 100%;
`;

export const Label = styled.label`
   pointer-events: none;
   color: ${colors.grey02};
   white-space: nowrap;
   margin-bottom: 0.3rem;

   font-size: 14px;
   display: block;
   font-weight: 400;
   color: ${colors.black};

   ${Div}:focus-within & {
      color: ${colors.primary};
   }
`;

export const AdornmentWrapperDiv = styled.div`
   display: flex;
   align-items: center;
   white-space: nowrap;
   position: absolute;
   padding-left: 10px;
   margin-right: 10px;

   &.end {
      right: 0px;
      top: 30%;
   }
`;

export const InputFieldWrapperDiv = styled.div`
   position: relative;
   display: flex;
   align-items: center;
   width: 100%;

   ::before,
   ::after {
      content: "";
      width: 100%;
      position: absolute;
      bottom: 0;
      left: 0;
   }

   ::before {
      /* border-left: linear-gradient(270deg, #00d2ff -8.34%, #7e51ff 50.93%, #fa4a84 106.85%); */
      border-left: 1px solid ${colors.grey};
   }
`;

export const InputField = styled.input<IInputProps>`
   width: 100%;
   border: none;
   outline: none;
   font-size: 14px;
   appearance: none;
   border-radius: 0;
   padding: 0 ${({ startAdornment }) => (startAdornment ? "3.8rem" : "1rem")};
   box-sizing: border-box;
   border-radius: 0px;
   border: 1px solid rgb(243 242 242);
   background-color: #fbfbfb;
   height: 50px;

   &:focus {
      border-left: 1px solid grey;
   }

   &::-ms-clear {
      display: none;
   }

   &::-ms-expand {
      display: none;
   }

   &:-moz-ui-invalid {
      box-shadow: none;
   }

   &::placeholder {
      font-weight: 400;
      opacity: 0.4;
   }

   &:-webkit-autofill,
   &:-webkit-autofill:hover,
   &:-webkit-autofill:focus,
   &:-webkit-autofill:active {
      transition: background-color 5000s;
      -webkit-text-fill-color: #000 !important;
   }

   &:disabled {
      background-color: hsl(0, 0%, 95%);
   }
`;

export const ErrorP = styled(motion.p)<{ easyFlow?: boolean }>`
   margin: 0.1rem 0 0 0;
   color: ${colors.error};
   font-size: 14px;
   letter-spacing: -0.01rem;
   font-weight: 400;

   ${({ easyFlow }) =>
      easyFlow &&
      css`
         margin: 0;
         position: absolute;
         left: 65px;
         bottom: -21px;
         font-size: 11.5px;
      `}
`;

export const PasswordControlButton = styled.button`
   background: none;
   border: none;
   width: 30px;
   position: absolute;
   right: 20px;
   top: 3px;

   overflow: hidden;

   .eye-icon {
      outline: none;
   }
`;
