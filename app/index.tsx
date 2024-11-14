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

export default function Index() {
  const router = useRouter();
  const data = [
    { id: "switch", name: "Switch Component" },
    { id: "button", name: "Button Component" },
    { id: "input", name: "Input Component" },
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
  },
  itemText: {
    fontSize: 18,
  },
});
