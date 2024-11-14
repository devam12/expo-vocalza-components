import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { TextInput } from "react-native-paper";

const InputComponent = () => {
  return (
    <ScrollView>
      <TextInput
        mode="outlined"
        placeholder="Enter Your Phone Number"
        right={<TextInput.Affix text="/100" />}
        outlineColor="#B0BEC5" // Default border color
        activeOutlineColor="#B0BEC5" // Border color when focused
        style={styles.input}
      />
    </ScrollView>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    width: "100%",
  },
});
