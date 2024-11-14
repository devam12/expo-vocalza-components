import React from "react";
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  ViewStyle,
  TextStyle,
  View,
  TouchableOpacityProps,
  Platform,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

type ButtonVariant = "contained" | "outlined" | "text";

interface ButtonProps extends TouchableOpacityProps {
  variant?: ButtonVariant;
  size?: "default" | "sm" | "lg";
  fullWidth?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  children: React.ReactNode;
  gradientColors?: [string, string]; // Ensure exactly two colors in the gradient
  customBackgroundColor?: string;
  customBorderColor?: string;
  customTextColor?: string;
  style?: any;
  textStyle?: TextStyle;
}

const getVariantStyles = (
  variant: ButtonVariant,
  gradientColors?: [string, string],
  customBackgroundColor?: string,
  customBorderColor?: string,
  customTextColor?: string
) => {
  const defaultGradient: [string, string] = ["#4C9EEB", "#9B5DE5"]; // Ensure two-color tuple
  const appliedGradient: [string, string] = gradientColors || defaultGradient;

  switch (variant) {
    case "contained":
      return {
        container: {
          ...styles.buttonBase,
          backgroundColor: customBackgroundColor || "transparent",
          borderColor: "transparent",
        },
        text: { color: customTextColor || "#FFFFFF" },
        gradient: appliedGradient,
      };
    case "outlined":
      return {
        container: {
          ...styles.buttonBase,
          backgroundColor: "transparent",
          borderWidth: 2,
          borderColor: customBorderColor || "#3B82F6",
        },
        text: {
          color: customTextColor || customBorderColor || "#3B82F6",
        },
        gradient: null,
      };
    case "text":
      return {
        container: {
          ...styles.buttonBase,
          backgroundColor: "transparent",
          borderColor: "transparent",
        },
        text: {
          color:
            customTextColor || (gradientColors ? "transparent" : "#3B82F6"),
        },
        gradient: gradientColors || null,
      };
    default:
      return {
        container: styles.buttonBase,
        text: { color: "#000" },
      };
  }
};

const getSizeStyles = (
  size: "default" | "sm" | "lg"
): ViewStyle & TextStyle => {
  switch (size) {
    case "sm":
      return {
        height: 36,
        paddingHorizontal: 12,
        fontSize: 14,
      };
    case "lg":
      return {
        height: 56,
        paddingHorizontal: 32,
        fontSize: 16,
      };
    default:
      return {
        height: 48,
        paddingHorizontal: 24,
        fontSize: 14,
      };
  }
};

const CustomButton: React.FC<ButtonProps> = ({
  variant = "contained",
  size = "default",
  fullWidth = false,
  leftIcon,
  rightIcon,
  children,
  gradientColors,
  customBackgroundColor,
  customBorderColor,
  customTextColor,
  style,
  textStyle,
  disabled,
  ...props
}) => {
  const variantStyles = getVariantStyles(
    variant,
    gradientColors,
    customBackgroundColor,
    customBorderColor,
    customTextColor
  );
  const sizeStyles = getSizeStyles(size);

  const containerStyle: ViewStyle = {
    ...variantStyles.container,
    ...sizeStyles,
    opacity: disabled ? 0.5 : 1,
    width: fullWidth ? "100%" : "auto",
    ...(style as ViewStyle),
  };

  const finalTextStyle: TextStyle = {
    ...styles.text,
    ...variantStyles.text,
    fontSize: sizeStyles.fontSize,
    ...(textStyle as TextStyle),
  };

  const renderContent = () => (
    <View style={styles.contentContainer}>
      {leftIcon && <View style={styles.iconLeft}>{leftIcon}</View>}
      <Text style={finalTextStyle}>{children}</Text>
      {rightIcon && <View style={styles.iconRight}>{rightIcon}</View>}
    </View>
  );

  if (variantStyles.gradient && variant === "contained") {
    return (
      <TouchableOpacity
        activeOpacity={0.7}
        disabled={disabled}
        style={fullWidth ? { width: "100%" } : {}}
        {...props}
      >
        <LinearGradient
          colors={variantStyles.gradient as [string, string]} // Cast to enforce tuple
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          style={[containerStyle, fullWidth ? { width: "100%" } : {}]}
        >
          {renderContent()}
        </LinearGradient>
      </TouchableOpacity>
    );
  }

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      disabled={disabled}
      style={containerStyle}
      {...props}
    >
      {renderContent()}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonBase: {
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "transparent",
    ...Platform.select({
      ios: {
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 4,
      },
      android: {
        elevation: 4,
      },
    }),
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  text: {
    fontWeight: "600",
    textAlign: "center",
  },
  iconLeft: {
    paddingRight: 8,
  },
  iconRight: {
    paddingLeft: 8,
  },
});

export default CustomButton;
