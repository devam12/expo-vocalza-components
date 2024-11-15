import React from "react";
import Header from "@/util-component/Header";
import { StyleSheet, SafeAreaView } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { TextInput } from "react-native-paper";

const InputIndex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Input Components" />

      <ComponentShowcase title="Input">
        <TextInput
          mode="outlined"
          placeholder="Enter Your Phone Number"
          right={<TextInput.Affix text="/100" />}
          outlineColor="#B0BEC5" // Default border color
          activeOutlineColor="#B0BEC5" // Border color when focused
          style={styles.input}
          multiline={true}
          numberOfLines={6} //Work in android only
        />
      </ComponentShowcase>
    </SafeAreaView>
  );
};

export default InputIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  input: {
    // width: "100%",
  },
});
