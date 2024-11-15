import React from "react";
import { TextInput, StyleSheet, View, TextInputProps } from "react-native";

interface CustomTextInputProps extends TextInputProps {
  variant?: "underline" | "outlined" | "filled";
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
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
    <View
      style={[
        styles.container,
        getVariantStyles(),
        !!leftIcon && styles.leftSpace,
        !!rightIcon && styles.rightSpace,
      ]}
    >
      {leftIcon && leftIcon}
      <TextInput
        style={[
          styles.textInput,
          variant === "filled" && styles.textInputFilled,
          style,
        ]}
        {...props}
      />
      {rightIcon && rightIcon}
    </View>
  );
};

export default CustomTextInput;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
  },
  textInput: {
    flex: 1,
    fontSize: 16,
    padding: 10,
    color: "#000",
  },
  underline: {
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
  textInputFilled: {
    padding: 12,
  },
  leftSpace: {
    paddingLeft: 8,
  },
  rightSpace: {
    paddingRight: 8,
  },
  icon: {
    fontSize: 20,
    color: "#888",
    paddingHorizontal: 8,
  },
});
