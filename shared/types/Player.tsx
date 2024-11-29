export interface RecordingProps {
  name: string;
  uri: string;
  duration: string;
}
export interface PlayerProps {
  recordings: RecordingProps[];
}

export interface PlayerControlProps {
  recordings: { name: string; uri: string; duration: string }[];
  resetRecordings: () => void;
}
