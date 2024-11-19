// app/screen/[componentId].tsx
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SwitchIndex from "@/Screens/switchIndex";
import ButtonIndex from "@/Screens/buttonIndex";
import InputIndex from "@/Screens/inputIndex";
import OtpInputIndex from "@/Screens/otpInputIndex";
import IconButtonIndex from "@/Screens/iconButtonIndex";
import ChipIndex from "@/Screens/chipIndex";
import SerahcBarIndex from "@/Screens/serahcBarIndex";
import SelectIndex from "@/Screens/selectIndex";

const ComponentScreen = () => {
  const { componentId } = useLocalSearchParams();

  const renderComponent = () => {
    switch (componentId) {
      case "switch":
        return <SwitchIndex />;
      case "button":
        return <ButtonIndex />;
      case "input":
        return <InputIndex />;
      case "otp-input":
        return <OtpInputIndex />;
      case "icon-button":
        return <IconButtonIndex />;
      case "chip":
        return <ChipIndex />;
      case "serach-bar":
        return <SerahcBarIndex />;
      case "select":
        return <SelectIndex />;
      default:
        return <Text>Component not found</Text>;
    }
  };

  return <View style={styles.container}>{renderComponent()}</View>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default ComponentScreen;
