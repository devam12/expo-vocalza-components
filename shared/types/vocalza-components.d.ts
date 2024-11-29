import { CustomButtonProps } from "./Button";
import { ChipProps } from "./Chip";
import { IconButtonProps } from "./IconButton";
import { CustomTextInputProps } from "./Input";
import { LockButtonProps } from "./LockButton";
import { OTPInputProps } from "./OTPInput";
import { PlayerProps, PlayerControlProps } from "./Player";
import { RecordButtonProps } from "./RecordButton";
import { RecordingControlProps } from "./RecordingControl";
import { StopButtonProps } from "./StopButton";
import { SwitchProps } from "./Switch";

declare module "vocalza-components" {
  export function Button(props: CustomButtonProps): JSX.Element;
  export function Chip(props: ChipProps): JSX.Element;
  export function IconButton(props: IconButtonProps): JSX.Element;
  export function Input(props: CustomTextInputProps): JSX.Element;
  export function OTPInput(props: OTPInputProps): JSX.Element;
  export function Switch(props: SwitchProps): JSX.Element;
  export function Chip(props: ChipProps): JSX.Element;
  export function LockButton(props: LockButtonProps): JSX.Element;
  export function Player(props: PlayerProps): JSX.Element;
  export function PlayerControl(props: PlayerControlProps): JSX.Element;
  export function RecordButton(props: RecordButtonProps): JSX.Element;
  export function RecordingControl(props: RecordingControlProps): JSX.Element;
  export function StopButton(props: StopButtonProps): JSX.Element;
}
