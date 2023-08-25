import * as React from "react";
import { Animated } from "react-native";

export type ThemeType = "light" | "dark";

export interface ISkeletonTheme {}
export interface IAnimatedValue {
  theme: ThemeType;
  AnimatedValue: Animated.Value;
}

const ContextSkeletonSimpler = React.createContext({} as IAnimatedValue);

export { ContextSkeletonSimpler };
