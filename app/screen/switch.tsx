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
      <Header title="Swicth Component" />

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
    margin: 16,
    backgroundColor: "#f4f4f4",
  },
  switch: {
    margin: 12,
  },
  showcaseItem: {
    marginBottom: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#ffffff",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 3 },
  },
  showcaseTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 8,
  },
  showcaseDescription: {
    fontSize: 14,
    color: "#666",
    marginBottom: 12,
  },
  componentContainer: {
    alignItems: "center",
  },
});
