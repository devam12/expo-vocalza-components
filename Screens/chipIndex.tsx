import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { Chip } from "@/components/Chip";

const ChipIndex = () => {
  const list = [
    "Music",
    "Art",
    "Food",
    "Dogs",
    "Cats",
    "Sports",
    "High-tech",
    "Netflix",
    "NFTs",
    "Gym",
    "Cars",
    "Language exchange",
    "Wine",
  ];
  return (
    <ScrollView style={styles.container}>
      <ComponentShowcase title="GradientColor Chip With Text">
        <Chip label="test"></Chip>
      </ComponentShowcase>

      <ComponentShowcase title="Basic Chip With Tag">
        <Chip
          label="#GROUP"
          borderGradientColors={["#dce1e0", "#dce1e0"]}
          textGradientColors={["#000", "#000"]}
        ></Chip>
      </ComponentShowcase>

      <ComponentShowcase title="Chip Container">
        <View
          style={{
            flex: 1,
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          {list?.map((item) => (
            <Chip
              label={item}
              // borderGradientColors={["#dce1e0", "#dce1e0"]}
              // textGradientColors={["#000", "#000"]}
              containerStyle={{ borderColor: "black", margin: 4 }}
            ></Chip>
          ))}
        </View>
      </ComponentShowcase>
    </ScrollView>
  );
};

export default ChipIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
