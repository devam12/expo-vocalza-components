import React, { useEffect, useState, useRef } from "react";
import { Pressable, Animated, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import Svg, { Path, Defs } from "react-native-svg";
import { LinearGradient as SvgGradient, Stop } from "react-native-svg";
import { SwitchProps } from "../types/Switch";

const Switch: React.FC<SwitchProps> = ({
  value = false,
  onValueChange,
  style,
  size = 32,
  title,
  titleStyle,
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
    <Svg width={size} height={size} viewBox="-6 -6 36 36" fill="none">
      <Defs>
        <SvgGradient id="checkGradient" x1="0" y1="0" x2="1" y2="0">
          <Stop offset="0" stopColor="#4C6EF5" />
          <Stop offset="1" stopColor="#A855F7" />
        </SvgGradient>
      </Defs>
      <Path
        d="M5 12.5L9.5 17L19 7"
        stroke="url(#checkGradient)"
        strokeWidth="3"
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

  const titleFontSize = size * 0.5;

  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        ...style,
      }}
    >
      {!!title && (
        <Text
          style={{
            flex: 1,
            fontSize: titleFontSize,
            ...titleStyle,
          }}
        >
          {title}
        </Text>
      )}
      <Pressable
        onPress={toggleSwitch}
        style={[{ width: size * 2, height: size }]}
      >
        <AnimatedLinearGradient
          colors={
            internalValue ? ["#4C6EF5", "#A855F7"] : ["#dce1e4", "#dce1e4"]
          }
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
    </View>
  );
};

export default Switch;
