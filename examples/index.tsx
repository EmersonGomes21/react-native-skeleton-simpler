import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import { SkeletonLoader } from "./skeleton-exampler";
import { SkeletonSimpler } from "../src";

export const SkeletonSimplerExample = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 3000);
  }, []);

  return (
    <SkeletonSimpler loading={loading} SkeletonComponent={SkeletonLoader}>
      <View>
        <Text>Your children</Text>
      </View>
    </SkeletonSimpler>
  );
};
