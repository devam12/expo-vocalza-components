import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";

const DemoAudioPlayer = () => {
  const {
    recording,
    recordings,
    counterMessage,
    startRecording,
    stopRecording,
    resetRecordings,
  } = useRecordEvent();

  return (
    <View>
      <Text>Timer: {counterMessage}</Text>
      <Button
        title={recording ? "Stop Recording" : "Start Recording"}
        onPress={recording ? stopRecording : startRecording}
      />

      {recordings.length > 0 && (
        <Button title="Clear Recordings" onPress={resetRecordings} />
      )}

      <Player recordings={recordings}></Player>
    </View>
  );
};

export default DemoAudioPlayer;

const styles = StyleSheet.create({});
