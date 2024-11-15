import { StyleSheet, View } from "react-native";
import React from "react";
import ComponentShowcase from "@/util-component/ComponentShowcase";

const ChipIndex = () => {
  return (
    <View style={styles.container}>
      <ComponentShowcase title="Basic Chip With Text">
        <></>
      </ComponentShowcase>
    </View>
  );
};

export default ChipIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
