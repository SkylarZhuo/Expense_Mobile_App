import { View, Text, StyleSheet, Alert } from "react-native";
import React from "react";
import AddInput from "./AddInput";
import { GlobalStyles } from "../../constants/color";
import { useState } from "react";
import { Button } from "react-native";
export default function AddExpenseForm({ onCancel, onSubmit }) {
  const [inputs, setInputs] = useState({
    amount: { value: "", isValid: true },
    description: { value: "", isValid: true },
    isImportant: { value: false, isValid: true },
  });

  function addExpenseHandler(inputIdentifier, enteredValue) {
    setInputs((currentInutVal) => {
      return {
        ...currentInutVal,
        [inputIdentifier]: { value: enteredValue, isValid: true },
      };
    });
  }

  function submitHandler() {
    const expenseData = {
      amount: +inputs.amount.value,
      description: inputs.description.value,
      isImportant:false
    };

    const amountIsValid = !isNaN(expenseData.amount) && expenseData.amount > 0;
    const descriptionIsValid = expenseData.description.trim().length > 0;

    if (!amountIsValid || !descriptionIsValid) {
      Alert.alert("Invalid input", "Please check your input!");
      // setInputs((curInputs) => {
      //   return {
      //     amount: { value: curInputs.amount.value, isValid: amountIsValid },
      //     description: {
      //       value: curInputs.description.value,
      //       isValid: descriptionIsValid,
      //     },
      //   };
      // });
      return;
    }
    onSubmit(expenseData);
  }

  const formIsInvalid = inputs.amount.isValid || inputs.description.isValid;
  return (
    <View style={styles.formContainer}>
      <View>
        <Text style={styles.titleText}>Your Expense</Text>
      </View>
      <View>
        <AddInput
          labelName="Amount"
          textInoutConfig={{
            keyboardType: "decimal-pad",
            onChangeText: addExpenseHandler.bind(this, "amount"),
            value: false
          }}
          invalid={!inputs.amount.isValid}
        />
        <AddInput
          labelName="Description"
          textInoutConfig={{
            multiline: true,
            //autoCapitalize:
            onChangeText: addExpenseHandler.bind(this, "description"),
            value: inputs.description.value,
          }}
          invalid={!inputs.description.isValid}
        />
        {!formIsInvalid && (
          <Text style={styles.errorMessage}>Invalid input values - please check your entered data!</Text>
        )}
        <View style={styles.buttons}>
          <Button title="Cancel" style={styles.button} onPress={onCancel}>
            Cancel
          </Button>
          <Button title="Submit" style={styles.button} onPress={submitHandler}>
            Submit
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  formContainer: {
    marginTop: 60,
  },
  titleText: {
    color: GlobalStyles.colors.DarkBlue2,
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
  },

  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  errorMessage: {
    textAlign: "center",
    color: GlobalStyles.colors.AttentionColor,
  },
});
