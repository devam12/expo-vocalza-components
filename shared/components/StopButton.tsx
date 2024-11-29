import React from "react";
import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient"; // Correct import for Expo projects
import { FontAwesome5 } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  withSpring,
  withSequence,
  withDelay,
} from "react-native-reanimated";

const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface StopButtonProps {
  onStop: () => void;
}

export const StopButton = ({ onStop }: StopButtonProps) => {
  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: withDelay(100, withSpring(1)) }],
  }));

  return (
    <AnimatedLinearGradient
      colors={["#ff1744", "#d50000"]}
      style={[styles.container, animatedStyle]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      onTouchEnd={onStop}
    >
      <FontAwesome5 name="stop-circle" size={32} color="white" />
    </AnimatedLinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    borderRadius: 30,
    justifyContent: "center", // Ensure vertical centering
    alignItems: "center", // Ensure horizontal centering
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent", // Ensure the gradient shows properly
  },
});
