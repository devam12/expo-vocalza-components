import React, { useCallback } from "react";
import { StyleSheet, Text, View } from "react-native";
import { RecordButton } from "./RecordButton";
import { StopButton } from "./StopButton";
import { LockButton } from "./LockButton";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
} from "react-native-reanimated";
import IconButton from "./IconButton";
import { Feather } from "@expo/vector-icons";

interface Props {
  isRecording: boolean;
  counterMessage: string;
  isLocked: boolean;
  setIsLocked: (locked: boolean) => void;
  startRecording: () => void;
  stopRecording: () => void;
}

export const RecordingControl: React.FC<Props> = ({
  isRecording,
  counterMessage,
  isLocked,
  setIsLocked,
  startRecording,
  stopRecording,
}) => {
  const offset = useSharedValue(8);

  const handleEndRecording = useCallback(() => {
    if (!isLocked) stopRecording();
  }, [isLocked, stopRecording]);

  const handleLockRecording = () => {
    if (!isLocked) setIsLocked(true);
  };

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [{ translateX: offset.value }],
  }));

  React.useEffect(() => {
    offset.value = withRepeat(withSpring(20), -1, true);
  }, []);

  return (
    <View>
      <Text
        style={[styles.recordingText, { color: isRecording ? "red" : "black" }]}
      >
        {counterMessage} / 01:00
      </Text>
      <View style={styles.controlsContainer}>
        {!isLocked && (
          <RecordButton
            text=""
            swipeable={true}
            swipeDirection="right"
            onHoldStart={startRecording}
            onHoldEnd={handleEndRecording}
            onThresholdReached={handleLockRecording}
            threshold={100}
          />
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
            />
          </Animated.View>
        )}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
