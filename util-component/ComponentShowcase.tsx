import { StyleSheet, Text, View } from "react-native";
import React from "react";
interface ComponentShowcaseProps {
  title: string;
  description?: string;
  children: React.ReactNode;
}

const ComponentShowcase = ({
  title,
  description,
  children,
}: ComponentShowcaseProps) => {
  return (
    <View style={styles.showcaseItem}>
      <Text style={styles.showcaseTitle}>{title}</Text>
      {description && (
        <Text style={styles.showcaseDescription}>{description}</Text>
      )}
      <View style={styles.componentContainer}>{children}</View>
    </View>
  );
};

export default ComponentShowcase;

const styles = StyleSheet.create({
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
    marginBottom: 14,
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
