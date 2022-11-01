import { View, Text, TextInput, StyleSheet } from "react-native";
import React from "react";
import { GlobalStyles } from "../../constants/color";

export default function AddInput({ labelName, textInoutConfig,invalid }) {
  let inputStyles = [styles.text];

  if (textInoutConfig && textInoutConfig.multiline) {
    inputStyles.push(styles.inputMultiline);
  }

  if(invalid){
    inputStyles.push(styles.invalidInput);
  }
  return (
    <View style={styles.inputContainer}>
      <Text style={[styles.label,invalid && styles.invalidLabel]}>{labelName}</Text>
      <TextInput style={inputStyles} {...textInoutConfig} />
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },

  label: {
    fontSize: 16,
    color: GlobalStyles.colors.DarkBlue,
    marginBottom: 4,
  },
  text: {
    backgroundColor: GlobalStyles.colors.LightColor20,
    color: GlobalStyles.colors.DarkBlue,
    padding: 8,
    borderRadius: 5,
    fontSize: 15,
  },
  inputMultiline: {
    minHeight: 100,
    textAlignVertical: "top",
  },
  invalidLabel:{
    color:GlobalStyles.colors.AttentionColor
  },
  invalidInput:{
    backgroundColor:GlobalStyles.colors.AttentionColorLight
  }
});
