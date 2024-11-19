import { TextInputProps } from "react-native";

export interface CustomTextInputProps extends TextInputProps {
  variant?: "underline" | "outlined" | "filled";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}
