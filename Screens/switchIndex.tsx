import React, { useEffect } from "react";
import Header from "@/util-component/Header";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { Switch } from "@/shared";

export default function SwitchIndex() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Swicth Components" />
      <ComponentShowcase title="Size 40">
        <Switch
          value={true}
          onValueChange={setSwitchValue}
          size={24}
          title={"Switch Name (Title)"}
        />
      </ComponentShowcase>

      <ComponentShowcase title="Size 24 - with costom styling">
        <Switch size={24} />
      </ComponentShowcase>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  switch: {
    margin: 12,
  },
  swicthtitleStyle: {
    fontFamily: "Heebo",
    fontSize: 16,
    fontWeight: "400",
    lineHeight: 24,
    letterSpacing: 0.5,
    textAlign: "left",
    color: "black",
  },
});
