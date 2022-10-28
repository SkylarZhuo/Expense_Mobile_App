import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { GlobalStyles } from "../../constants/color";
export default function GrandientColor() {
  return (
    <LinearGradient
      colors={[
        GlobalStyles.colors.backgroundColor1,
        GlobalStyles.colors.backgroundColor2,
        GlobalStyles.colors.backgroundColor3,
        GlobalStyles.colors.backgroundColor4,
      ]}
      style={styles.background}
    />
  );
}

const styles = StyleSheet.create({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 900,
  },
});
