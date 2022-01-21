import { InputHTMLAttributes, ReactNode } from "react";

export interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "css"> {
   /**
    * ID of an input
    *
    * It is also used for id of label & error text. Should be unique within a page.
    */
   id: string;

   className?: string;

   name?: string;

   /**
    * Input type
    *
    * @example "email"
    *
    * @example "password"
    *
    * @default "text"
    */
   type?: string;

   label?: string;

   required?: boolean;

   /**
    * Error for the input.
    *
    * @example
    * <Input error="Invalid value." />
    *
    * @example
    * <Input error={<span>You should enter <b>valid</b> phone number.</span>}
    */
   error?: ReactNode;

   fullWidth?: boolean;

   /**
    * Start adornment component
    *
    * You can use this to add a prefix to an input.
    *
    * @example
    * // Country code of Portugal phone number input
    * <Input startAdornment={<IconComponent />} />
    */
   startAdornment?: ReactNode;

   /**
    * End adornment component
    *
    * You can use this to add a suffix or action to the input.
    *
    * @example
    * // Suffix of weight input
    * <Input endAdornment="kg" />
    *
    * @example
    * // Clear input button
    * <Input endAdornment={<button>clear</button>} />
    */
   endAdornment?: ReactNode;
   isMobile?: boolean;
   setShowSearch?: (state: boolean) => void;
   handleSearch?: (searchVal) => void;
}
