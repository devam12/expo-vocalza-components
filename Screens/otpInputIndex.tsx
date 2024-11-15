import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import { OTPInput } from "@/components/OTPInput";

const OtpInputIndex = () => {
  const [otpError, setOtpError] = useState<string>("");

  const handleOTPComplete = (code: string) => {
    if (code === "123456") {
      setOtpError("");
      alert("OTP successfully completed");
    } else {
      setOtpError("OTP Invalid");
    }
  };

  const handleResendOTP = () => {};

  return (
    <View style={styles.container}>
      <OTPInput
        length={4}
        onComplete={handleOTPComplete}
        error={otpError}
        onResend={handleResendOTP}
        showError={!!otpError}
      />
    </View>
  );
};

export default OtpInputIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
  },
});
