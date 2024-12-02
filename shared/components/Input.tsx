import React from "react";
import { TextInput, StyleSheet, View } from "react-native";
import { CustomTextInputProps } from "../types/Input";

export const CustomTextInput: React.FC<CustomTextInputProps> = ({
  variant = "underline",
  leftIcon,
  rightIcon,
  style,
  ...props
}) => {
  const getVariantStyles = () => {
    switch (variant) {
      case "outlined":
        return styles.outlined;
      case "filled":
        return styles.filled;
      case "underline":
      default:
        return styles.underline;
    }
  };

  return (
    <View style={[styles.container, getVariantStyles()]}>
      {leftIcon && <View style={styles.iconContainer}>{leftIcon}</View>}
      <TextInput
        style={[
          styles.textInput,
          variant === "filled" && styles.textInputFilled,
          props.numberOfLines ? { height: props.numberOfLines * 24 } : null,
          style,
        ]}
        {...props}
      />
      {rightIcon && <View style={styles.iconContainer}>{rightIcon}</View>}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#BABCAB",
    borderRadius: 8,
    paddingHorizontal: 8,
    minHeight: 48,
  },
  textInput: {
    flex: 1,
    flexDirection: "column",
    fontSize: 16,
    color: "#000",
    paddingVertical: 8,
  },
  textInputFilled: {
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
    paddingHorizontal: 12,
  },
  underline: {
    borderWidth: 0,
    borderBottomWidth: 1,
    borderBottomColor: "#BABCAB",
  },
  outlined: {
    borderWidth: 1,
    borderColor: "#BABCAB",
    borderRadius: 8,
  },
  filled: {
    backgroundColor: "#f4f4f4",
    borderRadius: 8,
  },
  multilineInput: {
    textAlignVertical: "top",
  },
  iconContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 4,
  },
});
