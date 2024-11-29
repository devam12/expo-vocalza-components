import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import Animated from "react-native-reanimated";
import { LockButtonProps } from "../types/LockButton";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

export const LockButton = ({ isLocked }: LockButtonProps) => {
  return (
    <AnimatedLinearGradient
      colors={
        isLocked
          ? ["#9575cd", "#7986cb"]
          : ["rgba(149, 117, 205, 0.3)", "rgba(121, 134, 203, 0.3)"]
      }
      style={[styles.container]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Feather name="lock" size={24} color="white" />
    </AnimatedLinearGradient>
  );
};

export default LockButton;

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 35,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    position: "absolute",
    right: 20,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent",
  },
});
