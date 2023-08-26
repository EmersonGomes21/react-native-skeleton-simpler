import { ContextSkeletonSimpler, ThemeType } from "./context";
import { useContext, useState } from "react";
import { ViewProps, ViewStyle, StyleSheet, View, Animated } from "react-native";

interface ISkeletonItem extends ViewProps {
  stylesAnimatedView?: ViewStyle;
}
export default (props: ISkeletonItem) => {
  const [widthLayout, setWidthLayout] = useState(200);

  const { AnimatedValue, theme } = useContext(ContextSkeletonSimpler);

  const translateX = AnimatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [-10, widthLayout],
  });

  const styles = useStyles(
    {
      transform: [{ translateX }],
    },
    theme
  );

  return (
    <View
      {...props}
      style={[styles.containerAnimatedView, props.style ?? {}]}
      onLayout={(event) =>
        setWidthLayout(event.nativeEvent.layout.width ?? 200)
      }
    >
      <Animated.View
        style={[styles.animatedView, props.stylesAnimatedView ?? {}]}
      />
    </View>
  );
};

const useStyles = (translate = {}, theme: ThemeType) => {
  return StyleSheet.create({
    containerAnimatedView: {
      overflow: "hidden",
      backgroundColor: theme === "dark" ? "#313130" : "#dce7e9",
    },
    animatedView: {
      width: "90%",
      height: "100%",
      opacity: 0.13,
      backgroundColor: "#ffffff",
      ...translate,
    },
  });
};
