// app/index.tsx
import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { Entypo } from "@expo/vector-icons";

export default function Index() {
  const router = useRouter();
  const data = [
    { id: "switch", name: "Switch Component" },
    { id: "button", name: "Button Component" },
    { id: "input", name: "Input Component" },
    { id: "otp-input", name: "OTP Input Component" },
  ];

  const handlePress = (componentId: string) => {
    router.push(`/screen-index/${componentId}`);
  };

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={styles.itemContainer}
          onPress={() => handlePress(item.id)}
        >
          <Text style={styles.itemText}>{item.name}</Text>
          <Entypo name="chevron-small-right" size={32} color="black" />
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  itemText: {
    fontSize: 18,
  },
});
