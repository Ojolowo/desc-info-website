import { ChangeEvent, forwardRef, useCallback, useState, useMemo } from "react";
import { PasswordEyeOpen, PasswordEyeInactive } from "assets/vectors/password-eye";
import { IInputProps } from "./i-input";
import {
   ErrorP,
   PasswordControlButton,
   AdornmentWrapperDiv,
   InputFieldWrapperDiv,
   Div,
   InputField,
   Label,
} from "./input.style";

const Input = forwardRef<HTMLInputElement, IInputProps>(
   (
      {
         id,
         name,
         type = "text",
         label,
         required,
         value,
         error,
         fullWidth,
         className,
         onChange,
         defaultValue,
         startAdornment,
         endAdornment,
         isMobile,
         ...remainingProps
      },
      ref
   ) => {
      const labelId = label ? `${id}-label` : undefined;
      const errorId = error ? `${id}-error-text` : undefined;

      const [showPassword, setShowPassword] = useState<boolean>(false);

      const handleChange = useCallback(
         (event: ChangeEvent<HTMLInputElement>) => {
            onChange?.(event);
         },
         [onChange]
      );

      const PasswordControl = useMemo(
         () => (
            <PasswordControlButton type="button" onClick={() => setShowPassword(!showPassword)}>
               {showPassword ? (
                  <PasswordEyeOpen className="eye-icon" width="22" />
               ) : (
                  <PasswordEyeInactive width="22" className="eye-icon" />
               )}
            </PasswordControlButton>
         ),
         [setShowPassword, showPassword]
      );

      return (
         <Div fullWidth={fullWidth} className={className}>
            {label && (
               <Label id={labelId} htmlFor={id}>
                  {`${label}${required ? "*" : ""}`}
               </Label>
            )}
            <InputFieldWrapperDiv>
               {startAdornment && <AdornmentWrapperDiv>{startAdornment}</AdornmentWrapperDiv>}
               <InputField
                  id={id}
                  ref={ref}
                  name={name}
                  type={showPassword ? "text" : type}
                  value={value}
                  required={required}
                  aria-invalid={!!error}
                  defaultValue={defaultValue}
                  aria-describedby={errorId}
                  onChange={handleChange}
                  error={error}
                  startAdornment={startAdornment}
                  isMobile={isMobile}
                  {...remainingProps}
               />
               {endAdornment && (
                  <AdornmentWrapperDiv className="end">
                     {type === "password" ? PasswordControl : endAdornment}
                  </AdornmentWrapperDiv>
               )}
            </InputFieldWrapperDiv>
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
                  id={errorId}
               >
                  {error}
               </ErrorP>
            )}
         </Div>
      );
   }
);

Input.displayName = "input";

export { Input };
