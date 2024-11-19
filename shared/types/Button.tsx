import { TextStyle, TouchableOpacityProps } from "react-native";

export type ButtonVariant = "contained" | "outlined" | "text";

export interface CustomButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  gradientColors?: [string, string]; // Ensure exactly two colors in the gradient
  customBackgroundColor?: string;
  customBorderColor?: string;
  customTextColor?: string;
  style?: any;
  textStyle?: TextStyle;
}
