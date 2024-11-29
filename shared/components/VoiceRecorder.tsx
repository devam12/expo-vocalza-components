import React from "react";
import { StyleSheet, View } from "react-native";
import { useRecordEvent } from "../hooks/useRecordEvent";
import { RecordingControl } from "./RecordingControl";
import { PlayerControl } from "./PlayerControl";

export const VoiceRecorder = () => {
  const {
    recordings,
    recording,
    counterMessage,
    isRecording,
    startRecording,
    stopRecording,
    resetRecordings,
    isLocked,
    setIsLocked,
  } = useRecordEvent();

  return (
    <View style={styles.container}>
      <PlayerControl
        recordings={recordings}
        resetRecordings={resetRecordings}
      />
      <RecordingControl
        counterMessage={counterMessage}
        isRecording={isRecording}
        isLocked={isLocked}
        setIsLocked={setIsLocked}
        startRecording={startRecording}
        stopRecording={stopRecording}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    paddingBottom: 16,
  },
});
