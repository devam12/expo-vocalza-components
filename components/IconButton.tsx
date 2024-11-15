import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import React from "react";
import { Icon } from "react-native-elements";
import { Badge } from "react-native-paper";

interface IconButtonProps {
  icon: React.ReactNode;
  size?: number;
  filled?: boolean;
  badge?: number | string | undefined;
  badgeSize?: number;
  showBadge?: boolean;
  badgeStyle?: object;
  backgroundColor?: string;
  iconColor?: string;
}

const IconButton = ({
  icon,
  size = 24,
  badgeSize = 24,
  filled = false,
  badge = undefined,
  badgeStyle,
  showBadge = false,
  backgroundColor = "#d3d3d3",
}: IconButtonProps) => {
  return (
    <TouchableOpacity
      style={[
        styles.iconButton,
        filled && { backgroundColor },
        { width: size + 16, height: size + 16 },
      ]}
      activeOpacity={0.7}
    >
      {showBadge && (
        <Badge style={[styles.badge, badgeStyle]} size={badgeSize}>
          {badge || badge}
        </Badge>
      )}

      <View style={styles.iconContainer}>{icon}</View>
    </TouchableOpacity>
  );
};

export default IconButton;

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    padding: 8,
    backgroundColor: "transparent",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  badge: {
    position: "absolute",
    top: -5,
    right: -5,
    backgroundColor: "red",
    borderRadius: 14,
    paddingHorizontal: 0,
  },
});
