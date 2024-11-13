import Switch from "@/components/Switch";
import { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

export default function SwitchIndex() {
  const [switchValue, setSwitchValue] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 22 }}> Size : 40 </Text>
      <Switch
        // value={true}
        // onValueChange={setSwitchValue}
        size={40}
        style={styles.switch}
      />
      <Text style={{ fontSize: 22 }}> Size : 24 </Text>
      <Switch size={24} style={styles.switch} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 12,
  },
  switch: {
    margin: 12,
  },
});
