import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Ensure this is the correct import
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withSpring,
} from "react-native-reanimated";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface LockButtonProps {
  isLocked: boolean;
}

export const LockButton = ({ isLocked }: LockButtonProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withSpring(isLocked ? 1 : 1) }],
    opacity: withSpring(isLocked ? 1 : 0.3),
  }));

  return (
    <AnimatedLinearGradient
      colors={isLocked ? ["#9575cd", "#7986cb"] : ["#9575cd", "#7986cb"]}
      style={[styles.container, animatedStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
    >
      <Feather name="lock" size={24} color="white" />
    </AnimatedLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 50,
    height: 50,
    borderRadius: 25, // Make the button circular
    justifyContent: "center", // Center the content vertically
    alignItems: "center", // Center the content horizontally
    shadowColor: "#000",
    position: "absolute", // Optional for positioning
    right: 20, // Adjust position relative to the screen
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent", // Ensure the gradient shows correctly
  },
});
