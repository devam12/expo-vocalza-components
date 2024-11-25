import { TextStyle, ViewStyle } from "react-native";

export interface SwitchProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  style?: ViewStyle;
  size?: number;
  title?: string;
  titleStyle?: TextStyle;
}
