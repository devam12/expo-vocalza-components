import React from "react";
import {
  StyleSheet,
  FlatList,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import { useNavigation, useRouter } from "expo-router";

export default function Index() {
  const router = useRouter();
  const data = [{ id: "switch", name: "Switch" }];

  const handlePress = (itemId: string) => {
    router.navigate(`/screen/${itemId}`);
  };

  return (
    <>
      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.itemContainer}
            onPress={() => handlePress(item.id)}
          >
            <View style={styles.itemContent}>
              <Text style={styles.itemText}>{item.name}</Text>
            </View>
            <Entypo name="chevron-small-right" size={32} color="black" />
          </TouchableOpacity>
        )}
      />
    </>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    padding: 15,
    borderBottomWidth: 2,
    borderColor: "#ccc",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    flex: 1,
  },
  itemContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  itemText: {
    fontSize: 18,
  },
});
