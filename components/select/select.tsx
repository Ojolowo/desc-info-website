import Select from "react-select";
import { Div, ErrorP, InputFieldWrapperDiv, Label } from "components/input/input.style";
import { ISelectInput } from "./i-select";
import { SelectInputComponentStyle } from "./select-input.styles";

const SelectInput = ({ label, error, banner, required, ...rest }: ISelectInput) => {
   return (
      <Div>
         <InputFieldWrapperDiv>
            <SelectInputComponentStyle banner={banner} error={!!error} className="other-selct">
               {label && <Label className="select-label">{`${label}${required ? "*" : ""}`}</Label>}
               <Select
                  styles={{ menuPortal: (base) => ({ ...base, zIndex: 100 }) }}
                  classNamePrefix="react-select"
                  className="red"
                  menuPortalTarget={typeof window !== "undefined" ? window.document.body : null}
                  components={{ IndicatorSeparator: () => null }}
                  {...rest}
               />
               {error && (
                  <ErrorP
                     initial="pageInitial"
                     animate="pageAnimate"
                     exit="pageExit"
                     variants={{
                        pageInitial: {
                           opacity: 1,
                           x: 0,
                           y: -5,
                        },
                        pageAnimate: {
                           opacity: 1,
                           x: 0,
                           y: 0,
                        },
                        pageExit: {
                           opacity: 0,
                        },
                     }}
                  >
                     {error}
                  </ErrorP>
               )}
            </SelectInputComponentStyle>
         </InputFieldWrapperDiv>
      </Div>
   );
};

SelectInput.defaultProps = {
   label: "",
};

export { SelectInput };
