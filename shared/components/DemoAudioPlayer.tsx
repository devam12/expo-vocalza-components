import {
  Button,
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useRef } from "react";
import { useAudioRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";

const DemoAudioPlayer = () => {
  const playerRef = useRef<any>(null);

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
          return (
            <TouchableOpacity style={{ marginBottom: 8 }}>
              <Text style={{ marginBottom: 4 }}>
                {item.name} - {item.duration}
              </Text>
              <Player ref={playerRef} uri={item.uri}></Player>
            </TouchableOpacity>
          );
        }}
      />
    </View>
  );
};

export default DemoAudioPlayer;

const styles = StyleSheet.create({});
