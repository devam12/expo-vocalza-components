import React from "react";
import { StyleSheet, View } from "react-native";
import { VoiceRecorder } from "@/shared/components/VoiceRecorder";
import ComponentShowcase from "@/util-component/ComponentShowcase";
import { useRecordEvent } from "@/shared/hooks/useRecordEvent";
import { PlayerControl } from "@/shared/components/PlayerControl";
import { RecordingControl } from "@/shared/components/RecordingControl";

const AudioPPTIndex = () => {
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
      <ComponentShowcase
        title="Recording PPT Button & Player"
        description="PPT button records audio when held down. Users can swipe right to lock the button, allowing continuous recording without holding it. When locked, replace the recording button with a stop button to end the recording."
      >
        <View style={styles.cardContainer}>
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
  cardContainer: {
    backgroundColor: "#f5f5f5",
    padding: 12,
    borderRadius: 8,
    paddingBottom: 16,
  },
});
