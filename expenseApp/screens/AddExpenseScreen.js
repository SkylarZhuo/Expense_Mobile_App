import { View, Text, Button, StyleSheet } from "react-native";
import React, { useContext, useLayoutEffect } from "react";
import { ExpensesContext } from "../stores/expenses_context";
import AddExpenseForm from "../components/UpdateExpense/AddExpenseForm";
import PrimaryButton from "../components/UI/PrimaryButton";
import { writeToDb } from "../firebase/firestore";

export default function AddExpenseScreen({ route, navigation }) {
  const editedExpenseId = route.params?.expenseId;
  const expensesCtx = useContext(ExpensesContext);
  // const onComfirmHandler = () => {
  //   expensesCtx.addExpense({ description: "TextTextTest!!!", amount: 1999 });
  //   navigation.goBack();
  // };
  const cancelHandler = () =>{
    navigation.goBack();
  }

  // const onComfirmHandler = (expenseData) => {
  //   expensesCtx.addExpense(expenseData);
  //   navigation.goBack();
  // };

  //if we use writeToDb
  const onAddHandler = async function(expenseData) {
    await writeToDb(expenseData)
    navigation.goBack();
  }

  //if we use axois
  // const onAddHandler = async function(expenseData) {
  //   storeExpense(expenseData)
  //   expensesCtx.addExpense(expenseData);
  //   navigation.goBack();
  // }
  return (
    <View>
      <AddExpenseForm onCancel={cancelHandler} onSubmit={onAddHandler}/>
      {/* <Button title="add" onPress={onComfirmHandler}>
        Test for adding!
      </Button> */}
      {/* <View style={styles.buttonContainer}>
        <View style={styles.button}>
        <PrimaryButton content="Cancel" />
        </View>
        <View style={styles.button}>
        <PrimaryButton content="Submit" />
        </View>
      </View> */}
    </View>
  );
}

const styles=StyleSheet.create({
  buttonContainer:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent: "center",
  },
  button:{
    margin: 5,
  }
})