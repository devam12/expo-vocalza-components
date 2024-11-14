import React from "react";
import Header from "@/util-component/Header";
import { StyleSheet, SafeAreaView } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import Input from "@/components/Input";

const InputIndex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Input Components" />

      <ComponentShowcase title="Input">
        <Input />
      </ComponentShowcase>
    </SafeAreaView>
  );
};

export default InputIndex;

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: "#f4f4f4",
  },
});
