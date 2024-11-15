import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";

const OTPInput = () => {
  return <View style={styles.container}></View>;
};

export default OTPInput;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
