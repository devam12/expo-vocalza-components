import Switch from "@/components/Switch";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function Index() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View style={styles.container}>
        <Switch
          value={switchValue}
          onValueChange={setSwitchValue}
          size={40}
          style={styles.switch}
        />
        <Switch
          onValueChange={(val) => console.log("Toggled:", val)}
          size={24}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  switch: {
    marginBottom: 20,
  },
});
