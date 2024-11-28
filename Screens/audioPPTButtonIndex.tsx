import React from "react";
import { StyleSheet, View } from "react-native";
import { VoiceRecorder } from "@/shared/components/VoiceRecorder";
import ComponentShowcase from "@/util-component/ComponentShowcase";

const AudioPPTIndex = () => {
  return (
    <View style={styles.container}>
      <ComponentShowcase
        title="Recording PPT Button & Player"
        description="PPT button records audio when held down. Users can swipe right to lock the button, allowing continuous recording without holding it. When locked, replace the recording button with a stop button to end the recording."
      >
        <VoiceRecorder />
      </ComponentShowcase>
    </View>
  );
};

export default AudioPPTIndex;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
  },
});
