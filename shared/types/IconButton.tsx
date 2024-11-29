import { ViewStyle } from "react-native";

export interface IconButtonProps {
  icon: React.ReactNode;
  size?: number;
  filled?: boolean;
  badge?: number | string | undefined;
  badgeSize?: number;
  showBadge?: boolean;
  badgeStyle?: ViewStyle;
  backgroundColor?: string;
  iconColor?: string;
  activeOpacity?: number;
  containerStyle?: ViewStyle;
}
