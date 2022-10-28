import { View, Text, StyleSheet } from "react-native";
import React, { useContext } from "react";
import ExpensesOutput from "../components/ExpenseOutput/ExpensesOutput";
import { ExpensesContext } from "../stores/expenses_context";
import { useState } from "react";
import { useEffect } from "react";
import { collection, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase/firebase_setup";
import { GlobalStyles } from "../constants/color";
import GrandientColor from "../components/UI/GradientColor";

export default function AllExpensesScreen() {
  const [expense, setExpense] = useState([]);
  useEffect(() => {
    const unsubscribe = onSnapshot(
      collection(firestore, "Expense"),
      (querySnapshot) => {
        if (querySnapshot.empty) {
          setExpense([]);
          return;
        }
        setExpense(
          querySnapshot.docs.map((snapDoc) => {
            let data = snapDoc.data();
            data = { ...data, key: snapDoc.id };
            return data;
          })
        );
      }
    );
    return unsubscribe;
  }, []);

  // const expensesCtx = useContext(ExpensesContext);

  // const onComfirmHandler = () => {
  //   expensesCtx.addExpense({ description: "TextTextTest!!!", amount: 1999 });
  //   navigation.goBack();
  // };

  return (
    <View>
      <GrandientColor />
      <ExpensesOutput
        expenses={expense}
        expensesPeriod="Total"
        fallbackText="No expense found!!"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: GlobalStyles.colors.backgroundColor,
  },
});
