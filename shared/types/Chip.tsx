import { ViewStyle } from "react-native";

export interface ChipProps {
  label: string;
  onTap?: () => void;
  selected?: boolean;
  fullWidth?: boolean;
  borderGradientColors?: [string, string, ...string[]];
  textGradientColors?: [string, string, ...string[]];
  containerStyle?: ViewStyle;
}
