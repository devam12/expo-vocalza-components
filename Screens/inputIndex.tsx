import React from "react";
import Header from "@/util-component/Header";
import { StyleSheet, SafeAreaView, View } from "react-native";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import CustomTextInput from "@/shared/components/Input";
import { Feather } from "@expo/vector-icons";

const InputIndex = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Header title="Input Components" />

      <ComponentShowcase title="Underline Input">
        <View style={{ flexDirection: "row" }}>
          <CustomTextInput
            placeholder="Underline Variant"
            variant="underline"
            multiline
            numberOfLines={2}
            leftIcon={<Feather name="activity" size={24} color="black" />}
          />
        </View>
      </ComponentShowcase>

      <ComponentShowcase title="Outlined Input">
        <View style={{ flexDirection: "row" }}>
          <CustomTextInput
            placeholder="Enter Your Phone Number"
            variant="outlined"
            rightIcon={<Feather name="activity" size={24} color="black" />}
            leftIcon={<Feather name="activity" size={24} color="black" />}
          />
        </View>
      </ComponentShowcase>

      <ComponentShowcase title="Filled Input">
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <CustomTextInput
            placeholder="Filled Variant"
            variant="filled"
            leftIcon={<Feather name="activity" size={24} color="black" />}
          />
        </View>
      </ComponentShowcase>
    </SafeAreaView>
  );
};

export default InputIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
  },
  textInput: {
    padding: 10,
  },
  androidMultilineInput: {
    paddingVertical: 0,
    textAlignVertical: "center", // Center placeholder vertically for multiline in Android
  },
});
