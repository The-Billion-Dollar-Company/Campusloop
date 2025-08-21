// Allow className prop on React Native components for NativeWind
import "nativewind/types";

declare module "react-native" {
  interface ViewProps {
    className?: string;
  }
  interface TextProps {
    className?: string;
  }
}
