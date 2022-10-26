import { View, Text, StyleSheet, Button } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/color";
import { Pressable } from "react-native";


export default function PrimaryButton({ content,onPress }) {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: GlobalStyles.colors.primaryDark }}
      >
        <Text style={styles.buttonText}>{content}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
    buttonOuterContainer: {
        borderRadius: 14,
        marginTop: 30,
        overflow: "hidden",
        width: 180,
      },
      buttonInnerContainer: {
        backgroundColor: GlobalStyles.colors.DarkBlue2,
        paddingVertical: 8,
        paddingHorizontal: 16,
        elevation: 2,
      },
      buttonText: {
        color: 'white',
        textAlign: "center",
        fontSize:18,
        fontWeight: 'bold'
      },
      pressed:{
        opacity: 0.75
      }
});
