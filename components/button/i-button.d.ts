import { ButtonHTMLAttributes } from "react";

export interface IButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "css"> {
   variant: "primary" | "outline";
   isLoading?: boolean;
   fullWidth?: boolean;
   children: React.ReactNode;
   size?: "small" | "regular";
   width?: string;
   onClick?: () => void;
}

export type IButtonEmotionProps = IButtonProps;
