import React from "react";
import { StyleSheet, View } from "react-native";
import DemoAudioPlayer from "@/shared/components/DemoAudioPlayer";
import { VoiceRecorder } from "@/shared/components/VoiceRecorder";

const AudioPPTIndex = () => {
  return (
    <View style={styles.container}>
      <VoiceRecorder />
      {/* <DemoAudioPlayer /> */}
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
