import { useEffect, useState } from "react";
import { Audio } from "expo-av";

export const usePlayerEvent = () => {
  const [sound, setSound] = useState<Audio.Sound | null>(null);
  const [playing, setPlaying] = useState<boolean>(false);
  const [duration, setDuration] = useState<number>(0);
  const [progress, setProgress] = useState<number>(0);

  const playAudio = async (uri: string) => {
    try {
      if (sound) {
        // If there's an existing sound instance, unload it first
        await sound.unloadAsync();
        setSound(null);
      }

      const { sound: newSound } = await Audio.Sound.createAsync(
        { uri },
        { shouldPlay: true },
        (status) => {
          if (status.isLoaded && status.durationMillis) {
            setDuration(status.durationMillis);
            setProgress((status.positionMillis || 0) / status.durationMillis);
            setPlaying(status.isPlaying);
          }
        }
      );
      setSound(newSound);
    } catch (error) {
      console.error("Failed to play audio:", error);
    }
  };

  const pauseAudio = async () => {
    try {
      if (sound) {
        const status = await sound.getStatusAsync();
        if (status?.isLoaded) {
          await sound.pauseAsync();
          setPlaying(false);
        } else {
          await sound.playAsync();
          setPlaying(true);
        }
      }
    } catch (error) {
      console.error("Failed to toggle play/pause:", error);
    }
  };

  useEffect(() => {
    // Cleanup the sound instance on unmount
    return () => {
      if (sound) {
        sound.unloadAsync();
      }
    };
  }, [sound]);

  return {
    playAudio,
    pauseAudio,
    playing,
    duration,
    progress,
  };
};
