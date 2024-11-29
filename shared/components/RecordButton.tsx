import React, { useRef, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  PanResponder,
  Animated,
  TouchableWithoutFeedback,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Feather } from "@expo/vector-icons";
import { RecordButtonProps } from "../types/RecordButton";

export function RecordButton({
  text,
  onPress,
  onHoldStart,
  onHoldEnd,
  onThresholdReached,
  swipeable = true,
  swipeDirection = "right",
  threshold = 100,
  gradientColors = ["#4C9EEB", "#9B5DE5"],
}: RecordButtonProps) {
  const [isHolding, setIsHolding] = useState(false);
  const swipeDistance = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsHolding(true);
      onHoldStart?.();
    },
    onPanResponderMove: (_, gestureState) => {
      if (!swipeable) return;

      const { dx, dy } = gestureState;

      const checkThreshold = () => {
        switch (swipeDirection) {
          case "right":
            return dx >= threshold;
          case "left":
            return dx <= -threshold;
          case "bottom":
            return dy >= threshold;
          case "top":
            return dy <= -threshold;
          case "horizontal":
            return Math.abs(dx) >= threshold;
          case "vertical":
            return Math.abs(dy) >= threshold;
          default:
            return false;
        }
      };

      // Only trigger onThresholdReached if it's moving in the correct direction
      if (checkThreshold()) {
        onThresholdReached?.();
      }

      // Prevent swipe in the opposite direction if a specific direction is set
      if (swipeDirection === "right" && dx > 0) {
        Animated.timing(swipeDistance, {
          toValue: dx,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else if (swipeDirection === "left" && dx < 0) {
        Animated.timing(swipeDistance, {
          toValue: dx,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else if (swipeDirection === "top" && dy < 0) {
        Animated.timing(swipeDistance, {
          toValue: dy,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else if (swipeDirection === "bottom" && dy > 0) {
        Animated.timing(swipeDistance, {
          toValue: dy,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else if (swipeDirection === "horizontal") {
        Animated.timing(swipeDistance, {
          toValue: dx,
          duration: 0,
          useNativeDriver: true,
        }).start();
      } else if (swipeDirection === "vertical") {
        Animated.timing(swipeDistance, {
          toValue: dy,
          duration: 0,
          useNativeDriver: true,
        }).start();
      }
    },
    onPanResponderRelease: () => {
      setIsHolding(false);
      onHoldEnd?.();
      onPress?.();
      // Reset swipe animation
      Animated.timing(swipeDistance, {
        toValue: 0,
        duration: 150,
        useNativeDriver: true,
      }).start();
    },
  });

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, isHolding && styles.holding]}>
        <Animated.View
          style={[
            styles.gradientWrapper,
            swipeable &&
              (swipeDirection === "right" || swipeDirection === "left"
                ? { transform: [{ translateX: swipeDistance }] }
                : swipeDirection === "top" || swipeDirection === "bottom"
                ? { transform: [{ translateY: swipeDistance }] }
                : swipeDirection === "horizontal"
                ? { transform: [{ translateX: swipeDistance }] }
                : swipeDirection === "vertical"
                ? { transform: [{ translateY: swipeDistance }] }
                : {}),
          ]}
          {...panResponder.panHandlers}
        >
          <LinearGradient
            colors={["#4C9EEB", "#9B5DE5"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={styles.gradient}
          >
            <Feather name="mic" size={32} color="white" />
          </LinearGradient>
        </Animated.View>
      </View>
    </TouchableWithoutFeedback>
  );
}

export default RecordButton;

const styles = StyleSheet.create({
  container: {
    borderRadius: 50,
    overflow: "visible",
    width: 100, // Adjust based on your design
    height: 100, // Circular button
    justifyContent: "center",
    alignItems: "center",
    zIndex: 1,
  },
  holding: {
    opacity: 0.6,
  },
  gradientWrapper: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  gradient: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 16,
  },
});
