import { StyleSheet, Text, View } from "react-native";
import React from "react";

// Update to accept 'title' as a prop
interface HeaderPRops {
  title: string;
}
const Header = ({ title }: HeaderPRops) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fefefe", // Change to your desired color
    padding: 16,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    marginBottom: 16,
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
});
