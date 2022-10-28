import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { ExpensesContext } from "../stores/expenses_context";
import AddExpenseForm from "../components/UpdateExpense/AddExpenseForm";
import PrimaryButton from "../components/UI/PrimaryButton";
import { writeToDb } from "../firebase/firestore";

export default function AddExpenseScreen({ route, navigation }) {
  // const editedExpenseId = route.params?.expenseId;
  // const expensesCtx = useContext(ExpensesContext);
  const cancelHandler = () =>{
    navigation.goBack();
  }

  const onAddHandler = async function(expenseData) {
    await writeToDb(expenseData)
    navigation.goBack();
  }

  return (
    <View>
      <AddExpenseForm onCancel={cancelHandler} onSubmit={onAddHandler}/>
    </View>
  );
}
