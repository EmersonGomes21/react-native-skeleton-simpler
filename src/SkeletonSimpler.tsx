import React, { useEffect, useRef } from "react";
import { Animated, View, ViewStyle } from "react-native";
import { SkeletonItem } from ".";
import { ContextSkeletonSimpler, ThemeType } from "./context";

export default ({
  loading,
  children,
  SkeletonComponent = () => <></>,
  theme = "light",
  layout = [],
  duration = 1000,
  useNativeDriver = false,
}: {
  loading: boolean;
  children: React.ReactNode;
  SkeletonComponent?: () => React.JSX.Element;
  theme?: ThemeType;
  layout?: ViewStyle[];
  duration?: number;
  useNativeDriver?: boolean;
}) => {
  const AnimatedValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const animation = Animated.loop(
      Animated.timing(AnimatedValue, {
        toValue: 1,
        duration,
        useNativeDriver,
      })
    );

    if (loading) {
      animation.start();
    }
    return () => {
      animation.stop();
    };
  }, [loading]);

  if (!loading) {
    return children;
  }

  const isVisibleCustomSkeleton = layout.length === 0 || !layout;

  return (
    <ContextSkeletonSimpler.Provider value={{ AnimatedValue, theme }}>
      <View style={{ flex: 1 }}>
        {isVisibleCustomSkeleton && <SkeletonComponent />}
        {!isVisibleCustomSkeleton && getLayout(layout)}
      </View>
    </ContextSkeletonSimpler.Provider>
  );
};

const getLayout = (layoutConfigs: ViewStyle[] = []) => {
  if (layoutConfigs.length === 0) return null;
  return (
    <>
      {layoutConfigs.map((stylesLayoutItem) => {
        return <SkeletonItem style={stylesLayoutItem} />;
      })}
    </>
  );
};
