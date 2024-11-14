import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import OTPInput from "@/components/OTPInput";
import Header from "@/util-component/Header";
import ComponentShowcase from "@/util-component/ComponentShowcase";

const OtpInputIndex = () => {
  return (
    <ScrollView>
      <Header title="OTP Input Components" />
      <ComponentShowcase title="4 Digit Input">
        <OTPInput></OTPInput>
      </ComponentShowcase>
    </ScrollView>
  );
};

export default OtpInputIndex;

const styles = StyleSheet.create({});
