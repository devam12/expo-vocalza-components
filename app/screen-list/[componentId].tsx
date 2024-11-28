// app/screen/[componentId].tsx
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import SwitchIndex from "@/screens/switchIndex";
import ButtonIndex from "@/screens/buttonIndex";
import InputIndex from "@/screens/inputIndex";
import OtpInputIndex from "@/screens/otpInputIndex";
import IconButtonIndex from "@/screens/iconButtonIndex";
import ChipIndex from "@/screens/chipIndex";
import SerahcBarIndex from "@/screens/serahcBarIndex";
import SelectIndex from "@/screens/selectIndex";
import AudioPPTButton from "@/screens/audioPPTButtonIndex";

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
      case "audio-ppt-button":
        return <AudioPPTButton />;
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
