import React from "react";
import { View, StyleSheet, Pressable } from "react-native";
import { Feather } from "@expo/vector-icons";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  Easing,
} from "react-native-reanimated";
import { LinearGradient } from "expo-linear-gradient";
const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const AnimatedLinearGradient = Animated.createAnimatedComponent(LinearGradient);

interface PTTButtonProps {
  isRecording: boolean;
  onStart: () => void;
  onEnd: () => void;
  onSlideToLock: () => void;
  lockThreshold: number;
}

export const PTTButton = ({
  isRecording,
  onStart,
  onEnd,
  onSlideToLock,
  lockThreshold,
}: PTTButtonProps) => {
  const scale = useSharedValue(1);
  const slideX = useSharedValue(0);

  const buttonStyle = useAnimatedStyle(
    () => ({
      opacity: withSpring(isRecording ? 1 : 0.7),
      transform: [{ scale: scale.value }, { translateX: slideX.value }],
    }),
    [isRecording]
  );

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateX: slideX.value }],
  }));
  const handlePressIn = () => {
    scale.value = withSpring(1.1);
    onStart();
  };

  const handlePressOut = () => {
    if (slideX.value < lockThreshold) {
      slideX.value = withTiming(0, { duration: 300 });
      onEnd();
    }
    scale.value = withSpring(1);
  };

  const handleMove = (event: any) => {
    const dragX = event.nativeEvent.pageX;
    if (dragX >= lockThreshold) {
      slideX.value = lockThreshold;
      onSlideToLock();
    } else {
      slideX.value = Math.min(dragX, lockThreshold);
    }
  };

  return (
    <Animated.View
      style={[styles.container, animatedStyle]}
      onTouchMove={handleMove}
      onTouchStart={handlePressIn}
      onTouchEnd={handlePressOut}
    >
      <AnimatedLinearGradient
        colors={isRecording ? ["#4C9EEB", "#9B5DE5"] : ["#4C9EEB", "#9B5DE5"]}
        style={[styles.gradient, buttonStyle]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Feather name="mic" size={32} color="white" />
      </AnimatedLinearGradient>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent", // Ensure the gradient shows properly
  },
  gradient: {
    width: 100,
    height: 100,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: "transparent", // Ensure the gradient shows properly
  },
  button: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: "#4C9EEB",
    justifyContent: "center",
    alignItems: "center",
    elevation: 5,
  },
});
