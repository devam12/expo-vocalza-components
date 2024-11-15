import * as React from "react";
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Text,
  ViewStyle,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import MaskedView from "@react-native-masked-view/masked-view";

interface ChipProps {
  label: string;
  onTap?: () => void;
  selected?: boolean;
  fullWidth?: boolean; // New prop for full width option
  borderGradientColors?: [string, string, ...string[]];
  textGradientColors?: [string, string, ...string[]];
  containerStyle?: ViewStyle;
}

export function Chip({
  label,
  onTap,
  selected = false,
  fullWidth = false,
  borderGradientColors = ["#4C9EEB", "#9B5DE5"],
  textGradientColors = ["#4C9EEB", "#9B5DE5"],
  containerStyle,
}: ChipProps) {
  return (
    <TouchableOpacity
      onPress={onTap}
      style={[
        styles.chipContainer,
        fullWidth && styles.fullWidth,
        containerStyle && containerStyle,
      ]}
    >
      <LinearGradient
        colors={borderGradientColors}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={styles.gradientBorder}
      >
        <View
          style={[
            styles.contentContainer,
            { backgroundColor: selected ? "#f0f9ff" : "#ffffff" },
          ]}
        >
          <MaskedView
            maskElement={
              <View style={styles.textMaskContainer}>
                <Text style={[styles.label, selected && styles.selectedLabel]}>
                  {label}
                </Text>
              </View>
            }
          >
            <LinearGradient
              colors={textGradientColors}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              style={{ flex: 1 }}
            >
              <Text
                style={[
                  styles.label,
                  selected && styles.selectedLabel,
                  { opacity: 0 },
                ]}
              >
                {label}
              </Text>
            </LinearGradient>
          </MaskedView>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  chipContainer: {
    height: 40,
    alignSelf: "flex-start",
  },
  fullWidth: {
    width: "100%", // Expands to full width when `fullWidth` prop is true
  },
  gradientBorder: {
    borderRadius: 20,
    padding: 1.5,
    height: "100%",
  },
  contentContainer: {
    borderRadius: 20,
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  textMaskContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  label: {
    fontSize: 14,
    textAlign: "center",
  },
  selectedLabel: {
    fontWeight: "bold",
  },
});
