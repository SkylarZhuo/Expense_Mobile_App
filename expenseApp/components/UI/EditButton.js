import { View, Text, StyleSheet, Pressable } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/color";
import AddButton from "./AddButton";

export default function EditButton({ content, onPress, mode, style }) {
  function deletePressed() {
    onDelete(goal.key);
  }
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => pressed && styles.itemPressed}
    >
      <View style={styles.container}>
        <View style={[mode === "flat" && styles.flat, styles.textContainer]}>
          <Text style={[mode === "flat" && styles.flat, styles.text]}>
            {content}
          </Text>
        </View>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 12,
    margin: 30,
    borderRadius: 4,
    backgroundColor: GlobalStyles.colors.LightBlue,
    flexDirection: "row",
    height: 70,
  },
  textContainer: {
    flex: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    textAlign: "center",
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  flat: {
    backgroundColor: "transparent",
  },
  flatText: {
    color: GlobalStyles.colors.DarkGray1,
  },
  itemPressed: {
    opacity: 0.75,
    backgroundColor: GlobalStyles.colors.LightColor50,
    borderRadius: 4,
  },
});
