import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { useAudioRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";

const DemoAudioPlayer = () => {
  const {
    recording,
    recordings,
    counterMessage,
    startRecording,
    stopRecording,
    resetRecordings,
  } = useAudioRecordEvent();

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

      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Player item={item} />;
        }}
      />
    </View>
  );
};

export default DemoAudioPlayer;

const styles = StyleSheet.create({});
