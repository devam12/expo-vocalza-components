import React, { useEffect } from "react";
import Switch from "@/components/Switch";
import Header from "@/util-component/Header";
import { useState } from "react";
import { StyleSheet, SafeAreaView } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { useNavigation } from "expo-router";

export default function SwitchIndex() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Header title="Swicth Components" />

      <ComponentShowcase title="Size 40">
        <Switch
          value={true}
          onValueChange={setSwitchValue}
          size={40}
          style={styles.switch}
        />
      </ComponentShowcase>

      <ComponentShowcase title="Size 24 - with costom styling">
        <Switch size={24} style={styles.switch} />
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
});
