import { useEffect, useRef, useState } from "react";
import { Audio } from "expo-av";
import moment from "moment";

interface RecordingType {
  name: string;
  uri: string;
  duration: string;
}

export const useAudioRecordEvent = () => {
  const [permissionResponse, requestPermission] = Audio.usePermissions();
  const [recordings, setRecordings] = useState<RecordingType[]>([]);
  const [isRecording, setIsRecording] = useState<boolean>(false);
  const [recording, setRecording] = useState<Audio.Recording | null>(null);
  const [isLocked, setIsLocked] = useState(false);
  const [counterMessage, setCounterMessage] = useState<string>("00:00");
  const startTime = useRef<moment.Moment | null>(null);
  const interval = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (recording) {
      interval.current = setInterval(() => {
        if (startTime.current) {
          const diff = moment.duration(moment().diff(startTime.current));
          const minutes = diff.minutes().toString().padStart(2, "0");
          const seconds = diff.seconds().toString().padStart(2, "0");
          // const minutes = diff.minutes().toLocaleString("en-US", {
          //   minimumIntegerDigits: 2,
          //   useGrouping: false,
          // });
          // const seconds = diff.seconds().toLocaleString("en-US", {
          //   minimumIntegerDigits: 2,
          //   useGrouping: false,
          // });

          setCounterMessage(`${minutes}:${seconds}`);
        }
      }, 1000);
    } else {
      if (interval.current) clearInterval(interval.current);
      setCounterMessage("00:00");
    }

    return () => {
      if (interval.current) clearInterval(interval.current);
    };
  }, [recording]);

  const startRecording = async () => {
    try {
      if (permissionResponse?.status !== "granted") {
        const permission = await requestPermission();
        if (permission.status !== "granted") {
          throw new Error("Permission to access the microphone is required.");
        }
      }

      setRecordings(recordings);
      setIsRecording(true);
      setIsLocked(false);

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      startTime.current = moment();
      const { recording: _recording } = await Audio.Recording.createAsync(
        Audio.RecordingOptionsPresets.HIGH_QUALITY
      );
      setRecording(_recording);
    } catch (err) {
      console.error("Failed to start recording:", err);
    }
  };

  const stopRecording = async () => {
    try {
      if (recording) {
        await recording.stopAndUnloadAsync();
        const uri = recording.getURI();
        if (uri) {
          const status = await recording.getStatusAsync();
          const durationMillis = status.durationMillis || 0;
          const duration = moment
            .utc(moment.duration(durationMillis).asMilliseconds())
            .format("mm:ss");

          setRecordings((prev) => [
            ...prev,
            {
              name: `Recording ${prev.length + 1}`,
              uri,
              duration,
            },
          ]);
        }

        setRecording(null);
        setIsRecording(false);
        setIsLocked(false);
        startTime.current = null;
        await Audio.setAudioModeAsync({
          allowsRecordingIOS: false,
        });
      }
    } catch (err) {
      console.error("Failed to stop recording:", err);
    }
  };

  const resetRecordings = () => {
    setRecordings([]);
  };

  return {
    recording,
    recordings,
    counterMessage,
    isRecording,
    isLocked,
    startRecording,
    stopRecording,
    resetRecordings,
    setIsLocked,
    setIsRecording,
  };
};
