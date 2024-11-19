import { CustomButtonProps } from "./Button";
import { ChipProps } from "./Chip";
import { IconButtonProps } from "./IconButton";
import { CustomTextInputProps } from "./Input";
import { OTPInputProps } from "./OTPInput";


declare module "vocalza-components" {
  export function Button(props: CustomButtonProps): JSX.Element;
  export function Chip(props: ChipProps): JSX.Element;
  export function IconButton(props: IconButtonProps): JSX.Element;
  export function Input(props: CustomTextInputProps): JSX.Element;
  export function OTPInput(props: OTPInputProps): JSX.Element;
}
