export interface OTPInputProps {
  length?: number;
  onComplete?: (code: string) => void;
  error?: string;
  onResend?: () => void;
  showError?: boolean;
}
