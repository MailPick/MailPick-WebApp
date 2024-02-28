import tw,{TwStyle,styled} from "twin.macro";
import { ButtonProps,ButtonVariant,ButtonSize } from './Button';

export const baseStyle = tw`font-bold border-none rounded-full`

export const buttonVariants: Record<ButtonVariant,TwStyle> = {
  primary: tw`text-white bg-blue-500 hover:bg-blue-400 active:bg-blue-600`,
  danger:  tw`text-white bg-red-500 hover:bg-red-400 active:bg-red-600`,
  warning: tw`text-white bg-amber-500 hover:bg-amber-400 active:bg-amber-600`,
  success: tw`text-white bg-green-500 hover:bg-green-400 active:bg-green-600`,
  default: tw`text-white bg-gray-500 hover:bg-gray-400 active:bg-gray-600`
} as const;

export const buttonSize: Record<ButtonSize, TwStyle> = {
  sm : tw`px-4 py-2 text-xs`,
  md : tw`px-6 py-3 text-base`,
  lg : tw`px-8 py-4 text-2xl`
} as const

export const StyledButton = styled.button<ButtonProps>(({ variant, size }) => [
  baseStyle,
  size && buttonSize[size],
  variant && buttonVariants[variant]
]);
