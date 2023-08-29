import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import { SkeletonItem } from "../src/index";

const widthScreen = Dimensions.get("screen").width;

const CarouselSkeleton = () => {
  return (
    <View style={{ alignItems: "center", flexDirection: "row", marginTop: 20 }}>
      {Array.from({ length: 4 }, () => (
        <View style={{ alignItems: "center", marginRight: 30 }}>
          <SkeletonItem
            style={{
              width: 130,
              height: 100,
              marginBottom: 10,
              borderRadius: 10,
            }}
          />
          <SkeletonItem
            style={{
              width: "100%",
              height: 10,
              marginBottom: 1,
              borderRadius: 10,
            }}
          />
          <SkeletonItem
            style={{ width: "100%", height: 10, borderRadius: 10 }}
          />
        </View>
      ))}
    </View>
  );
};

const HeaderSection = () => {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
        marginTop: 15,
        justifyContent: "space-between",
      }}
    >
      <View>
        <SkeletonItem
          style={[
            styles.common,
            {
              width: 120,
              height: 15,
              borderRadius: 10,
              marginTop: 10,
            },
          ]}
        />
        <SkeletonItem
          style={[
            styles.common,
            {
              width: 200,
              height: 15,
              borderRadius: 10,
              marginTop: 10,
            },
          ]}
        />
      </View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <SkeletonItem
          style={[styles.circle, { marginLeft: 10, width: 30, height: 30 }]}
        />
      </View>
    </View>
  );
};

export const SkeletonLoader = () => {
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 10,
          justifyContent: "space-between",
        }}
      >
        <View>
          <SkeletonItem
            style={[
              styles.common,
              {
                width: 150,
                height: 15,
                borderRadius: 10,
                marginTop: 10,
              },
            ]}
          />
          <SkeletonItem
            style={[
              styles.common,
              {
                width: 200,
                height: 15,
                borderRadius: 10,
                marginTop: 10,
              },
            ]}
          />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <SkeletonItem
            style={[styles.circle, { marginLeft: 10, width: 40, height: 40 }]}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginTop: 15,
        }}
      >
        <SkeletonItem style={[styles.header, { width: widthScreen - 90 }]} />
        <SkeletonItem
          style={[styles.circle, { marginLeft: 10, width: 40, height: 40 }]}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          overflow: "hidden",
          marginTop: 20,
        }}
      >
        {Array.from({ length: 8 }, () => (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <SkeletonItem style={[styles.circle, { marginRight: 10 }]} />
            <SkeletonItem
              style={{
                width: 70,
                height: 10,
                marginRight: 10,
                marginTop: 5,
              }}
            />
          </View>
        ))}
      </View>

      <HeaderSection />
      <CarouselSkeleton />
      <HeaderSection />
      <View style={{ marginTop: 10 }}>
        <SkeletonItem
          style={{ width: "100%", borderRadius: 10, height: 180 }}
        />
      </View>
      <CarouselSkeleton />
      <HeaderSection />
      <CarouselSkeleton />
    </View>
  );
};

const styles = StyleSheet.create({
  common: {},
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingHorizontal: 20,
  },
  skeleton: {
    flex: 1,
    backgroundColor: "#f7f7f7",
    height: 10,
  },
  header: {
    width: 150,
    height: 40,
    borderRadius: 20,
  },
  circle: {
    width: 50,
    height: 50,
    borderRadius: 25,
  },
});
