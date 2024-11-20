import React, { useState, useEffect, useRef } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  Platform,
  NativeEventEmitter,
  NativeModules,
} from "react-native";
import { Text } from "react-native";
import CustomButton from "./Button";
import { OTPInputProps } from "../types/OTPInput";

export function OTPInput({
  length = 4,
  onComplete,
  error,
  onResend,
  showError = false,
}: OTPInputProps) {
  const [otp, setOtp] = useState<string[]>(new Array(length).fill(""));
  const [activeInput, setActiveInput] = useState<number>(0);
  const [otpError, setOtpError] = useState<string>("");
  const [isResendDisabled, setIsResendDisabled] = useState(false);
  const [resendTimer, setResendTimer] = useState(30);
  const inputRefs = useRef<Array<TextInput | null>>([]);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const startResendCooldown = () => {
    setIsResendDisabled(true);
    setResendTimer(120);

    timerRef.current = setInterval(() => {
      setResendTimer((prev) => {
        if (prev <= 1) {
          clearInterval(timerRef.current!);
          setIsResendDisabled(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  const onResendHandler = () => {
    alert("New OTP sent!");
    setOtpError("");
    if (onResend) {
      onResend();
    }
    startResendCooldown();
  };

  useEffect(() => {
    if (Platform.OS === "android") {
      try {
        const eventEmitter = new NativeEventEmitter(
          NativeModules.RNSmsRetrieverModule
        );
        const subscription = eventEmitter.addListener(
          "SMS_RETRIEVED",
          (event: any) => {
            const message = event.message;
            if (message) {
              const otpMatch = message.match(/\d{4}/);
              if (otpMatch) {
                const receivedOtp = otpMatch[0].split("");
                setOtp(receivedOtp);
                onComplete?.(receivedOtp.join(""));
              }
            }
          }
        );

        return () => {
          subscription.remove();
        };
      } catch (error) {
        console.log("SMS Retriever API not available");
      }
    }
  }, []);

  useEffect(() => {
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, []);

  const handleInputChange = (value: string, index: number) => {
    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    // Auto focus next input
    if (value && index < length - 1) {
      inputRefs.current[index + 1]?.focus();
      setActiveInput(index + 1);
    }

    // Check if OTP is complete
    if (newOtp.every((digit) => digit) && newOtp.length === length) {
      onComplete?.(newOtp.join(""));
    }
  };

  const handleKeyPress = (event: any, index: number) => {
    // Handle backspace
    if (event.nativeEvent.key === "Backspace" && !otp[index] && index > 0) {
      const newOtp = [...otp];
      newOtp[index - 1] = "";
      setOtp(newOtp);
      inputRefs.current[index - 1]?.focus();
      setActiveInput(index - 1);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {otp.map((digit, index) => (
          <TextInput
            key={index}
            ref={(ref) => (inputRefs.current[index] = ref)}
            style={[
              styles.input,
              activeInput === index ? styles.inputActive : null,
              showError && error ? styles.inputError : null,
            ]}
            maxLength={1}
            keyboardType="number-pad"
            value={digit}
            onChangeText={(value) => handleInputChange(value, index)}
            onKeyPress={(e) => handleKeyPress(e, index)}
            onFocus={() => setActiveInput(index)}
            selectionColor="#007AFF"
          />
        ))}
      </View>

      {showError && error && <Text style={styles.errorText}>{error}</Text>}

      <CustomButton
        variant="text"
        textStyle={{ fontWeight: "700", fontSize: 16 }}
        onPress={onResendHandler}
        style={styles.resendButton}
        disabled={isResendDisabled}
      >
        {"RESEND CODE"}
      </CustomButton>

      {isResendDisabled && (
        <Text
          style={{ color: "red" }}
        >{`Resend Code after : ${resendTimer}s`}</Text>
      )}
    </View>
  );
}

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
  },
  input: {
    width: 50,
    height: 50,
    borderWidth: 1,
    borderColor: "#E8E8E8",
    borderRadius: 8,
    textAlign: "center",
    fontSize: 24,
    color: "#000000",
    backgroundColor: "white",
  },
  inputError: {
    borderColor: "#FF3B30",
  },
  inputActive: {
    borderColor: "#007AFF",
    borderWidth: 2,
  },
  errorText: {
    color: "#FF3B30",
    fontSize: 16,
    marginTop: 16,
    textAlign: "center",
  },
  resendButton: {
    marginTop: 16,
  },
});
