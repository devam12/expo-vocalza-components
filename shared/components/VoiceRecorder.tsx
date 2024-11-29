import React, { useCallback, useRef } from "react";
import { LockButton } from "./LockButton";
import { StopButton } from "./StopButton";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, FlatList } from "react-native";
import { useAnimatedStyle } from "react-native-reanimated";
import Animated from "react-native-reanimated";
import { useAudioRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";
import { RecordButton } from "./RecordButton";

export const VoiceRecorder = () => {
  const {
    recordings,
    counterMessage,
    isRecording,
    startRecording,
    stopRecording,
    resetRecordings,
    isLocked,
    setIsLocked,
  } = useAudioRecordEvent();

  const handleEndRecording = useCallback(() => {
    if (!isLocked) {
      stopRecording();
      setIsLocked(false);
    }
  }, [isLocked, stopRecording]);

  const handleLockRecording = () => {
    if (!isLocked) {
      setIsLocked(true);
    }
  };

  const lockButtonStyle = useAnimatedStyle(() => ({
    opacity: isRecording ? (isLocked ? 1 : 0.6) : 0,
  }));

  const waveAnimatedStyle = useAnimatedStyle(() => ({
    opacity: isRecording && !isLocked ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Player item={item} />;
        }}
      />

      <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
        <Text
          style={[
            styles.recordingText,
            { color: isRecording ? "red" : "black" },
          ]}
        >
          {counterMessage} / 01:00
        </Text>
        {!!recordings?.length && (
          <TouchableOpacity onPress={resetRecordings}>
            <Text style={[styles.recordingText, { color: "blue" }]}>
              Clear Recordings
            </Text>
          </TouchableOpacity>
        )}
      </View>

      <View style={styles.controlsContainer}>
        {!isLocked && (
          <RecordButton
            text=""
            swipeable={true}
            swipeDirection={"right"}
            onHoldStart={startRecording}
            onHoldEnd={handleEndRecording}
            onThresholdReached={handleLockRecording}
            threshold={100}
          ></RecordButton>
        )}

        {isRecording && isLocked && (
          <View style={styles.stopButtonContainer}>
            <StopButton onStop={stopRecording} />
          </View>
        )}

        <Animated.View style={[styles.lockButtonContainer, lockButtonStyle]}>
          <LockButton isLocked={isLocked} />
        </Animated.View>

        <Animated.View style={[styles.waveIndicator, waveAnimatedStyle]}>
          <Feather name="arrow-right" size={12} color="#fff" />
        </Animated.View>
      </View>
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
  controlsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  pttContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  stopButtonContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  lockButtonContainer: {
    position: "absolute",
    right: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  waveIndicator: {
    position: "absolute",
    width: 20,
    height: 20,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    opacity: 0,
    right: "25%",
  },
  recordingText: {
    color: "#ff4081",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
});
