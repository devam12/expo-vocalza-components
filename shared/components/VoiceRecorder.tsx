import React, { useCallback } from "react";
import { LockButton } from "./LockButton";
import { StopButton } from "./StopButton";
import { Feather } from "@expo/vector-icons";
import { StyleSheet, TouchableOpacity } from "react-native";
import { View, Text } from "react-native";
import { useAudioRecordEvent } from "../hooks/useRecordEvent";
import { Player } from "./Player";
import { RecordButton } from "./RecordButton";
import IconButton from "./IconButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";

export const VoiceRecorder = () => {
  const offset = useSharedValue<number>(8);

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
    }
  }, [isLocked, stopRecording]);

  const handleLockRecording = () => {
    if (!isLocked) {
      setIsLocked(true);
    }
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(withSpring(20), -1, true);
  }, []);

  return (
    <View style={styles.container}>
      <Player recordings={recordings} />

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

        {isRecording && isLocked && <StopButton onStop={stopRecording} />}

        {isRecording && <LockButton isLocked={isLocked} />}

        {isRecording && !isLocked && (
          <Animated.View
            style={[animatedStyles, { right: 100, position: "absolute" }]}
          >
            <IconButton
              icon={<Feather name="arrow-right" size={12} color="#000" />}
              containerStyle={styles.waveIndicator}
              size={12}
            ></IconButton>
          </Animated.View>
        )}
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
  waveIndicator: {
    justifyContent: "center",
    alignItems: "center",
    zIndex: 0,
  },
  recordingText: {
    color: "#ff4081",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 12,
  },
});
