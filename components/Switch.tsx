import React, { useEffect, useState, useRef } from "react";
import { StyleSheet, Pressable, Animated, ViewStyle } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, {
  Path,
  Defs,
  LinearGradient as SvgGradient,
  Stop,
} from "react-native-svg";

interface SwitchProps {
  value?: boolean;
  onValueChange?: (value: boolean) => void;
  style?: ViewStyle;
  size?: number; // base size of the switch (width will be 2x this size, height will be this size)
}

const Switch: React.FC<SwitchProps> = ({
  value = false, // default to false if not provided
  onValueChange,
  style,
  size = 32,
}) => {
  const [internalValue, setInternalValue] = useState(value);
  const translateX = useRef(
    new Animated.Value(internalValue ? size : 0)
  ).current;

  useEffect(() => {
    setInternalValue(value);
  }, [value]);

  useEffect(() => {
    Animated.spring(translateX, {
      toValue: internalValue ? size : 0,
      useNativeDriver: true,
    }).start();
  }, [internalValue]);

  const toggleSwitch = () => {
    const newValue = !internalValue;
    setInternalValue(newValue);
    if (onValueChange) {
      onValueChange(newValue);
    }
  };

  const AnimatedLinearGradient =
    Animated.createAnimatedComponent(LinearGradient);

  const CheckIcon = () => (
    <Svg width={size * 0.4} height={size * 0.4} viewBox="0 0 12 12">
      <Defs>
        <SvgGradient id="checkGradient" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#4C6EF5" />
          <Stop offset="1" stopColor="#A855F7" />
        </SvgGradient>
      </Defs>
      <Path
        d="M3 6L5.5 8.5L9 3"
        stroke="url(#checkGradient)"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  const CloseIcon = () => (
    <Svg width={size * 0.4} height={size * 0.4} viewBox="0 0 12 12">
      <Path
        d="M3 3L9 9M3 9L9 3"
        stroke="#A1A1A1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );

  return (
    <Pressable
      onPress={toggleSwitch}
      style={[{ width: size * 2, height: size }, style]}
    >
      <AnimatedLinearGradient
        colors={internalValue ? ["#4C6EF5", "#A855F7"] : ["#dce1e4", "#dce1e4"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        style={{
          width: "100%",
          height: "100%",
          borderRadius: size / 2,
          padding: size * 0.125,
        }}
      >
        <Animated.View
          style={{
            width: size * 0.75,
            height: size * 0.75,
            borderRadius: size * 0.375,
            shadowColor: "#000",
            shadowOffset: { width: 0, height: size * 0.06 },
            shadowOpacity: 0.25,
            shadowRadius: size * 0.12,
            elevation: 5,
            overflow: "hidden",
            transform: [{ translateX }],
          }}
        >
          <LinearGradient
            colors={["#ffffff", "#ffffff"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={{
              width: "100%",
              height: "100%",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: size * 0.375,
            }}
          >
            {internalValue ? <CheckIcon /> : <CloseIcon />}
          </LinearGradient>
        </Animated.View>
      </AnimatedLinearGradient>
    </Pressable>
  );
};

export default Switch;
