import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Player } from "./Player";
import { PlayerControlProps } from "../types/Player";

export const PlayerControl: React.FC<PlayerControlProps> = ({
  recordings,
  resetRecordings,
}) => {
  return (
    <View>
      <Player recordings={recordings} />
      {!!recordings?.length && (
        <TouchableOpacity onPress={resetRecordings}>
          <Text style={[styles.recordingText, { color: "blue" }]}>
            Clear Recordings
          </Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

export default PlayerControl;

const styles = StyleSheet.create({
  recordingText: {
    color: "#ff4081",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
});
