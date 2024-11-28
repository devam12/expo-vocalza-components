import React, { useCallback, useRef } from "react";
import { PTTButton } from "./PTTButton";
import { LockButton } from "./LockButton";
import { StopButton } from "./StopButton";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text, FlatList } from "react-native";
import { useAnimatedStyle, withTiming } from "react-native-reanimated";
import Animated, { useSharedValue } from "react-native-reanimated";
import { useAudioRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";

export const VoiceRecorder = () => {
  const playerRef = useRef<any>(null);
  const slideX = useSharedValue(0);
  const opacity = useSharedValue(1);
  const lockThreshold = 100;
  const {
    recording,
    recordings,
    counterMessage,
    isRecording,
    startRecording,
    stopRecording,
    resetRecordings,
    setIsRecording,
    isLocked,
    setIsLocked,
  } = useAudioRecordEvent();

  const handlePTTEnd = useCallback(() => {
    if (!isLocked) {
      stopRecording();
      setIsLocked(false);
      slideX.value = withTiming(0, { duration: 300 });
    }
  }, [isLocked, stopRecording]);

  const handleLockSlide = () => {
    if (!isLocked) {
      setIsLocked(true);
      slideX.value = withTiming(0, { duration: 300 });
      opacity.value = withTiming(0, { duration: 300 });
    }
  };

  const handleStop = () => {
    stopRecording();
    opacity.value = withTiming(1, { duration: 300 });
  };

  const pttAnimatedStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: slideX.value }],
    opacity: isLocked ? 0 : 1,
  }));

  const lockButtonStyle = useAnimatedStyle(() => ({
    opacity: isRecording ? (isLocked ? 1 : 0.6) : 0,
    transform: [{ translateX: slideX.value }],
  }));

  const waveAnimatedStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: slideX.value },
      { rotate: `${Math.sin(slideX.value / 20) * 5}deg` },
    ],
    opacity: isRecording && !isLocked ? 1 : 0,
  }));

  return (
    <View style={styles.container}>
      <FlatList
        data={recordings}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => {
          return <Player ref={playerRef} item={item} />;
        }}
      />

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
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
          <Animated.View style={[styles.pttContainer, pttAnimatedStyle]}>
            <PTTButton
              isRecording={isRecording}
              onStart={startRecording}
              onEnd={handlePTTEnd}
              onSlideToLock={handleLockSlide}
              lockThreshold={lockThreshold}
            />
          </Animated.View>
        )}

        {isRecording && isLocked && (
          <View style={styles.stopButtonContainer}>
            <StopButton onStop={handleStop} />
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
