
export interface RecordingControlProps {
  isRecording: boolean;
  counterMessage: string;
  isLocked: boolean;
  setIsLocked: (locked: boolean) => void;
  startRecording: () => void;
  stopRecording: () => void;
}
