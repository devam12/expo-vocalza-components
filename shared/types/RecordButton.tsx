export interface RecordButtonProps {
  text: string;
  onPress?: () => void;
  onHoldStart?: () => void;
  onHoldEnd?: () => void;
  onThresholdReached?: () => void;
  swipeable?: boolean;
  swipeDirection?:
    | "left"
    | "right"
    | "top"
    | "bottom"
    | "horizontal"
    | "vertical";
  threshold?: number;
  gradientColors?: string[];
}
