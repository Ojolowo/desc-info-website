import styled from "styled-components";
import { colors } from "theme/colors";

export const SelectInputComponentStyle = styled.div<{ error?: boolean }>`
   width: 100%;
   .react-select__value-container
      .react-select__value-container--is-multi
      .css-g1d714-ValueContainer {
      &:focus-visible {
         outline: none;
         border: 1px solid transparent;
      }
   }

   .react-select__value-container {
      width: 100%;
      min-height: 50px;
   }

   .react-select__control {
      background-color: #fbfbfb;
      height: 50px;
      width: 100%;
      font-size: 14px;
      color: #dadada;
      border: 1px solid rgb(243 242 242);
   }

   .react-select__placeholder {
      font-weight: 400;
      color: #8fa7bc;
   }

   .react-select__indicator-seperator {
      display: none !important;
   }

   .react-select__single-value {
      font-weight: 400;
      color: ${colors.black};
   }

   .react-select__multi-value__label {
      background: rgb(255 255 255 / 58%);
      color: #007eff;
   }

   .react-select__multi-value {
      background: rgba(0, 126, 255, 0.08);
      color: #007eff;
      border: 1px solid rgba(0, 126, 255, 0.24);
      margin: 5px 8px;

      &:not(:first-child) {
         margin-left: 8px;
      }
   }
`;

export const SelectInputWrapper = styled.div`
   width: 200px;
`;
